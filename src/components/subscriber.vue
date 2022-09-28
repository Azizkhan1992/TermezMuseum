<template>
  <div class="subscribe mt-36">
    <div class="subscriberContainer">
      <div class="wr-100 mb-24">
        <div class="w-50">
          <label class="white mb-12" for="">Подпишитесь на новости музея</label>

          <div class="wr-100">
            <input
              v-model="usersEmail"
              class="w-4"
              type="email"
              placeholder="Введите вашу электронную почту"
            >
            <button class="white-ghost w-2 ml-24"><span>Подписаться</span></button>
          </div>
        </div>

        <div class="w-50 align-r">
          <label class="white mb-12" for="">Также, подпишитесь на нас в социальных сетях</label>

          <div class="wr-100 justify-r gap-48">
            
            <a
              class="social"
              v-for="social in socialNetworks"
              :key="social.id"
              :href="social.link"
              target="_blanc"
            >
              <img class="socNet" :src="require('@/assets/icons/' + social.network + '.svg')" alt="">
            </a>
          
          </div>
        </div>
      </div>

      <p class="subs-text">Подпишитесь на новости музея и получайте новости археологии в вашу электронную почту. Никакого спама и никакой ложной информации. Только новости археологии!</p>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'subscriberComponent',

  data() {
    return {
      usersEmail: '',
      socialNetworks: [
        {id: 1, network: 'facebook', link: 'https://www.facebook.com/termizarxeologiyamuzeyi'},
        {id: 2, network: 'youtube', link: 'https://www.youtube.com/channel/UCz7I4TVUUhgOpsldM28WtPA'},
        {id: 3, network: 'instagram', link: 'https://www.instagram.com/termez_archaeologycal_museum/?hl=ru'},
        {id: 4, network: 'telegram', link: 'https://t.me/Arxeologiya_muzeyi'},
      ],
    }
  }
}
</script>

<style>

</style>