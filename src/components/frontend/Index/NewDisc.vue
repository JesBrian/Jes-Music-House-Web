<template>
  <div>
    <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
      <i class="mh-if music-albu-2" style="margin-right:8px; color:#00d8ff; font-size:30px;"></i><span style="font-size:23px; font-weight:700;">新碟上架</span>
      <router-link to="/disc" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
    </div>
    <div class="glass-bg box-show" style="width:93%; height:138px; margin:0 auto 18px; position:relative;">
      <a @click="changeNewDiscContent('prev')" class="p-n-btn prev-btn ban-select" style="width:23px; height:43px; top:48%; left:13px; position:absolute; display:inline-block; transform:translate(0,-50%); z-index:9;"></a>
      <a @click="changeNewDiscContent('next')" class="p-n-btn next-btn ban-select" style="width:23px; height:43px; top:48%; right:13px; position:absolute; display:inline-block; transform:translate(0,-50%); z-index:9;"></a>
      <div style="width:100%; height:100%; padding:8px 43px; box-sizing:border-box; overflow:hidden;">

        <transition-group name="list-complete" tag="div" mode="in-out" style="overflow:hidden;">
          <div v-for="item in discList" :key="item.id" class="new-disc-cell list-complete-item" style="width:20%; height:100%; display:inline-block; text-align:center; z-index:5; overflow:hidden;">
            <router-link to="playList" style="margin:6px 0 0 6px; position:relative; display:inline-block;">
              <img v-lazy="item.img" style="width:65px; height:65px; top:5px; left:5px; position:absolute;"/>
              <img src="../../../../static/img/default/disc.png" style="width:88px; height:75px;"/>
            </router-link>
            <!--<i class="mh-if play"></i>-->
            <p class="text-hidden" style="margin-left:12px; padding-right:8px; text-align:left;">
              <router-link to="playList" style="font-size:14.5px; color:#BBB;">{{ item.name }}</router-link>
            </p>
            <p class="text-hidden" style="margin-left:12px; padding-right:8px; text-align:left;">
              <router-link to="singer" style="font-size:12.3px; color:#999;">{{ item.id + ' / ' + item.singer }}</router-link>
            </p>
          </div>
        </transition-group>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewDisc',

  data () {
    return {
      tempDiscList: [
        {
          id: '6666',
          img: 'http://p4.music.126.net/sOP352yXvIDUEuoszzw10w==/109951163254017452.jpg?param=130y130',
          name: '6x4csvdvdvddghjbsa说',
          singer: 'JesBrian'
        },
        {
          id: '7777',
          img: 'http://p3.music.126.net/ScRBV25DIAhQ9gwn48aWwg==/109951163254709971.jpg?param=130y130',
          name: '7b部分yt播和',
          singer: 'JesBrian'
        },
        {
          id: '8888',
          img: 'http://p3.music.126.net/nIFpIWQGtO9Ku_Gr6j5oZg==/109951163245250665.jpg?param=130y130',
          name: '8ui居民健康cf',
          singer: 'JesBrian'
        },
        {
          id: '9999',
          img: 'http://p4.music.126.net/sOP352yXvIDUEuoszzw10w==/109951163254017452.jpg?param=130y130',
          name: '9df87safas',
          singer: 'JesBrian'
        },
        {
          id: '10101010',
          img: 'http://p3.music.126.net/nIFpIWQGtO9Ku_Gr6j5oZg==/109951163245250665.jpg?param=130y130',
          name: '10成熟魅力',
          singer: 'JesBrian'
        }
      ],

      discList: [
        {
          id: '1111',
          img: 'http://p3.music.126.net/SSrKTgS_mHWUlXYg-h7oFg==/109951163251507637.jpg?param=130y130',
          name: '1x4csvdvdvddghjbsa说',
          singer: 'JesBrian'
        },
        {
          id: '2222',
          img: 'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130',
          name: '2b部分yt播和',
          singer: 'JesBrian'
        },
        {
          id: '3333',
          img: 'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130',
          name: '3ui居民健康cf',
          singer: 'JesBrian'
        },
        {
          id: '4444',
          img: 'http://p3.music.126.net/L0CbA4O3bpQHzcSqeVO_bg==/109951163253294767.jpg?param=130y130',
          name: '4df87safas',
          singer: 'JesBrian'
        },
        {
          id: '5555',
          img: 'http://p3.music.126.net/SSrKTgS_mHWUlXYg-h7oFg==/109951163251507637.jpg?param=130y130',
          name: '5成熟魅力',
          singer: 'JesBrian'
        }
      ]
    }
  },

  methods: {
    changeNewDiscContent (type = 'next') {
      if (type === 'next') {
        this.discList.push(this.tempDiscList.shift())
        this.tempDiscList.push(this.discList.shift())
      } else {
        this.discList.unshift(this.tempDiscList.pop())
        this.tempDiscList.unshift(this.discList.pop())
      }
    },

    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.shift()
      this.items.push(this.nextNum++)
    },
    remove: function () {
      this.items.shift()
      this.items.push(this.nextNum++)
    }
  }
}
</script>

<style scoped>
  .read-more {
    margin-top:46px; float:right; font-size:13px; color:#888; line-height:1em;
  }
  .read-more:hover {
    color:#EEE;
    text-decoration:underline;
  }
  .read-more > .mh-if {
    font-size:12.5px;
  }
  .read-more:hover > .mh-if {
    color: #20dbfc;
  }

  .p-n-btn {
    background:url('../../../../static/img/button/button.png') no-repeat;
    background-size:auto 103%;
  }
  .p-n-btn.prev-btn {
    background-position:0 0;
  }
  .p-n-btn.prev-btn:hover {
    background-position:-24px 0;
  }
  .p-n-btn.next-btn {
    background-position:-49px 0;
  }
  .p-n-btn.next-btn:hover {
    background-position:-73px 0;
  }

  .new-disc-cell>i.mh-if {
    top:60px; left:78px; position:absolute; display:none;
  }
  .new-disc-cell:hover>i.mh-if {
    display:inline-block;
  }
  .new-disc-cell>i.mh-if:hover {
    color:#20dbfc;
  }

  .list-complete-item {
    transition: all 0.5s;
    display: inline-block;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translate(-68px, -8px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>
