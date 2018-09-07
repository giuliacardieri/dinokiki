<template>
  <div>
    <section class="section section--flex section--white">
      <section class="section__flex-img-wrapper">
        <img class="section__flex-img" src="static/img/dinos/dino.png" />
      </section>
      <section class="section__flex-text-wrapper">
        <h2 class="section__h2 section__h2--blue">DINOWHO?</h2>
        <p class="section__p section__p--blue">Dinokiki is a green, cute and friendly dinosaur. He only speaks kiki language and loves bow ties. He's inspired by the website <a class="about__a about__a--blue" href="http://plspetdoge.com/" target="_blank">Pls Pet Doge</a> and Jerome Jarre's and Nicholas Megalis' Vine <a class="about__a about__a--blue" href="https://vine.co/v/h1i5WBUFW0K" target="_blank">Mama Dinosaur Finds Her Baby</a>. The idea was born from a lecture by Reddit co-founder Alexis Ohanian at Rochester Institute of Technology on February 2014. He said we should make our ideas get out of the paper and I agreed. After a long weekend and support from my friends, recording audios in the middle of a restaurant, Dinokiki was born on February 11th, 2014.</p>
      </section>
    </section>
    <section class="section">
      <h2 class="section__h2">Who recorded the Kikis?</h2>
      <p class="section__p">People from all over the world! And hopefully, <span class="section__p--bold">you!</span></p>
      <p class="section__p">A kiki is an audio file that is played on Dinokiki's home page. Each kiki was recorded by a friend of Dinokiki and has a theme, chosen by its creator or me (call me Dinokiki BFF and translator). You can check the Kiki Gallery in the section below.</p>
      <p class="section__p">You can record a kiki and become a Dinokiki friend. If you are interested just check out <router-link to="/send" class="section__a">send your kiki page</router-link>. Dinokiki will be honored to be your friend!</p>
      <button class="button">Let me send a Kiki!</button>
    </section>
    <section class="section section--white">
      <h2 class="section__h2 section__h2--blue">DINOKIKI'S FRIENDS GALLERY</h2>
      <section class="kiki-gallery">
        <section class="kiki-gallery__kiki" v-if="kiki.img" v-for="kiki in kikiList" :data="kiki" :key="kiki.id" :id="kiki.id">
          <img class="kiki-gallery__img" :src="'static/img/dinos/' + kiki.img + '.png'" v-on:click="showBack(kiki.id)" />
          <section class="kiki-gallery__back-info">
            <h3>{{ kiki.name }}</h3>
          </section>
        </section>
      </section> 
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      kikiList: null
    }
  },
  methods: {
    updateData: function (data) {
      this.kikiList = data.response
    }
  },
  mounted () {
    this.$axios
      .get('https://dinokiki.herokuapp.com/api/kikis')
      .then(response => (this.updateData(JSON.parse(response.data))))
  }
}
</script>