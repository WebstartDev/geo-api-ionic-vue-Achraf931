<template>
    <div class="ion-page">
        <div>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Communes</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-item>
                <ion-label position="floating">Code postal ou nom de la ville</ion-label>
                <ion-input :value="zipcode" @input="zipcode = $event.target.value"></ion-input>
            </ion-item>
            <div class="ion-padding">
                <ion-button @click.prevent="sendForm()" expand="block" type="submit"
                            class="ion-no-margin ios button button-block button-solid ion-activatable ion-focusable hydrated activated">
                    Send
                </ion-button>
            </div>
        </div>
        <ion-content>
          <ion-card v-for="item in array">
            <ion-card-header>
              <ion-card-title>{{ item.nom }}</ion-card-title>
              <ion-card-subtitle>Code postal : {{ item.code }}</ion-card-subtitle>
              <ion-card-subtitle>Code département : {{ item.codeDepartement }}</ion-card-subtitle>
              <ion-card-subtitle>Code région : {{ item.codeRegion }}</ion-card-subtitle>
              <ion-card-subtitle>Population : {{ item.population }}</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-content>
        <container/>
    </div>
</template>

<script>
    import Container from '../components/Container.vue'

    export default {
        name: "home",
        components: {
            Container
        },
        data() {
            return {
                zipcode: null,
                array: []
            }
        },
        methods: {
            sendForm() {
                let reg = /[0-9]{5}/
                let reg2 = /[a-zA-Z\-]+/g
                let reg3 = /[@]/
                if (reg.test(this.zipcode)) {
                    this.$http.get('https://geo.api.gouv.fr/communes?codePostal=' + this.zipcode).then(res => {
                        this.array = res.data
                    })
                }
                else if (this.zipcode != null && reg2.test(this.zipcode.toLowerCase()) && !reg3.test(this.zipcode.toLowerCase())) {
                    this.$http.get('https://geo.api.gouv.fr/communes?nom=' + this.zipcode).then(res => {
                        this.array = res.data
                    })
                } else {
                    this.presentAlert('Le code postal ou la ville est incorrecte')
                }
                this.zipcode = null
            },
            presentAlert(message) {
                return this.$ionic.alertController
                    .create({
                        header: 'Erreur',
                        message: message,
                        buttons: ['OK'],
                    }).then(a => a.present())
            }
        }
    }
</script>
