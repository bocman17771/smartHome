new Vue({
    el: '#app',
    data: {
      activeMenu: false,
      message: 'Hello Vue!',
      wind: '',
      select: '',
      window: {
        width: '',
        height: ''
      },
      lists: [
        'list',
        'list1',
        'list2',
        'list3',
        'list4',
        'list5',
        'list6',
      ]
    },
    // computed: {
    //   getActveMenu() {
    //     let this.window > 375 ? true : false
    //   }
    // },
    watch: {
      'window.width'(size) {
        size > 375 ? this.activeMenu = true : this.activeMenu = false
      },
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
          this.window.width = window.innerWidth;
          this.window.height = window.innerHeight;
      }
  }
})
