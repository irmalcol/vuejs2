<template>
    <div>
        <p>This person is {{ mood }}</p>
        <button @click="changeMood">Improve Mood</button>
        <hr>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      name: 'Ian',
      mood: 'grumpy'
    };
  },
  methods: {
      changeMood() {
          this.mood = 'happy';
      }
  }
}
</script>