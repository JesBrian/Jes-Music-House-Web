<template>
  <div id="homeLayout">
    <div class="singer-container box-show">
      <ul style="width:85%; margin:0 auto;">
        <li v-for="fItem in singerCategory" :key="fItem.id" class="box-shadow" style="margin-top:8px; padding-bottom:8px;">
          <span class="singer-type-title">{{ fItem.fCategory }}</span>
          <router-link v-for="sItem in fItem.sCategory" :key="sItem.id" :to="`/singer/${sItem.id}`"
                       :class="{active: sItem.id === Number($route.params['type'])}"
                       class="box-show singer-type-cell">
            <i></i>{{ sItem.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div style="width:100%; min-height:1268px; padding:0 3% 0 23%; box-sizing:border-box;">

      <div style="height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
        <span style="font-size:23px; font-weight:700;">入驻歌手</span>
        <router-link to="/" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
      </div>
      <div style="height:338px;">
        <ul>
          <li v-for="n in 10" :key="n + 99" style="width:20%; height:168px; float:left;">
            <div style="width:76%; height:100%; margin:0 auto;">
              <router-link to="/singer-detail/hot-song/1" style="width:100%; height:108px; display:inline-block;">
                <img class="box-show" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=180y180" style="width:100%; height:100%; padding:4px;"/>
              </router-link>
              <router-link to="/singer-detail/hot-song/1" style="line-height:1.38em; color:#AAA;">JesBrian</router-link>
            </div>
          </li>
        </ul>
      </div>

      <div style="height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
        <span style="font-size:23px; font-weight:700;">热门歌手</span>
        <router-link to="/" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
      </div>
      <div style="height:338px;">
        <ul>
          <li v-for="n in 10" :key="n + 99" style="width:20%; height:168px; float:left;">
            <div style="width:76%; height:100%; margin:0 auto;">
              <router-link to="/singer-detail/hot-song/1" style="width:100%; height:108px; display:inline-block;">
                <img class="box-show" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=180y180" style="width:100%; height:100%; padding:4px;"/>
              </router-link>
              <router-link to="/singer-detail/hot-song/1" style="line-height:1.38em; color:#AAA;">JesBrian</router-link>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Singer',

  data () {
    return {
      singerCategory: [
        {
          fCategory: '推荐',
          sCategory: [
            {id: 11, name: '推荐歌手'}
          ]
        },
        {
          fCategory: '华语',
          sCategory: [
            {id: 21, name: '华语男歌手'},
            {id: 22, name: '华语女歌手'},
            {id: 23, name: '华语组合/乐队'}
          ]
        },
        {
          fCategory: '欧美',
          sCategory: [
            {id: 31, name: '欧美男歌手'},
            {id: 32, name: '欧美女歌手'},
            {id: 33, name: '欧美组合/乐队'}
          ]
        },
        {
          fCategory: '日本',
          sCategory: [
            {id: 41, name: '日本男歌手'},
            {id: 42, name: '日本女歌手'},
            {id: 43, name: '日本组合/乐队'}
          ]
        },
        {
          fCategory: '韩国',
          sCategory: [
            {id: 51, name: '韩国男歌手'},
            {id: 52, name: '韩国女歌手'},
            {id: 53, name: '韩国组合/乐队'}
          ]
        },
        {
          fCategory: '其他',
          sCategory: [
            {id: 61, name: '其他男歌手'},
            {id: 62, name: '其他女歌手'},
            {id: 63, name: '其他组合/乐队'}
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .singer-container {
    width:20%; height:100%; top:0; left:0; padding-top:12px; position:absolute; box-sizing:border-box; color:#999;
  }

  .singer-type-title {
    font-size:20px; font-weight:700; line-height:2em; color:#DDD;
  }

  .singer-type-cell {
    height:32px; margin-bottom:8px; display:block; line-height:31px; color:#AAA;
  }
  .singer-type-cell:hover {
    color:#EEE; cursor:pointer;
  }
  .singer-type-cell.active {
    color:#00d8ff;
  }
  .singer-type-cell > i {
    width:6px; height:6px; margin:12.5px 15px; background:#999; float:left; opacity:0;
  }
  .singer-type-cell:hover > i {
    opacity:1;
  }
  .singer-type-cell.active > i {
    opacity:1;
    background:#00d8ff;
  }

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
</style>
