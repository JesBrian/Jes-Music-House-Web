<template>
  <div id="homeLayout">
    <div class="singer-left box-show">
      <ul class="singer-category">
        <li v-for="fItem in singerCategory" :key="fItem.id" class="singer-category-cell box-shadow">
          <span class="singer-category-cell-title">{{ fItem.fCategory }}</span>
          <router-link v-for="sItem in fItem.sCategory" :key="sItem.id" :to="`/singer/${sItem.id}`"
                       :class="{active: sItem.id === Number($route.params['type'])}"
                       class="singer-category-cell-link box-show">
            <i class="dot"></i>{{ sItem.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="singer-right">
      <div class="singer-nav">
        <i class="singer-nav-icon mh-if hot"></i>
        <span class="singer-nav-title">热门歌手</span>
      </div>
      <singer-group :singer-list="hotSingerList" />

      <div class="singer-nav">
        <i class="singer-nav-icon mh-if hot"></i>
        <span class="singer-nav-title">相关歌手</span>
      </div>
      <singer-group :singer-list="allSingerList" />

    </div>
  </div>
</template>

<script>
import SingerGroup from '../../../../components/frontend/Singer/SingerGroup.vue'

export default {
  name: 'Singer',

  components: {
    SingerGroup
  },

  data () {
    return {
      singerCategory: [
        {
          fCategory: '推荐',
          sCategory: [{id: 11, name: '推荐歌手'}]
        },
        {
          fCategory: '华语',
          sCategory: [{id: 21, name: '华语男歌手'}, {id: 22, name: '华语女歌手'}, {id: 23, name: '华语组合/乐队'}]
        },
        {
          fCategory: '欧美',
          sCategory: [{id: 31, name: '欧美男歌手'}, {id: 32, name: '欧美女歌手'}, {id: 33, name: '欧美组合/乐队'}]
        },
        {
          fCategory: '日本',
          sCategory: [{id: 41, name: '日本男歌手'}, {id: 42, name: '日本女歌手'}, {id: 43, name: '日本组合/乐队'}]
        },
        {
          fCategory: '韩国',
          sCategory: [{id: 51, name: '韩国男歌手'}, {id: 52, name: '韩国女歌手'}, {id: 53, name: '韩国组合/乐队'}]
        },
        {
          fCategory: '其他',
          sCategory: [{id: 61, name: '其他男歌手'}, {id: 62, name: '其他女歌手'}, {id: 63, name: '其他组合/乐队'}]
        }
      ],

      hotSingerList: [
        {id: 111, name: '歌手名称1'},
        {id: 112, name: 'The Name of the singer 2'},
        {id: 113, name: '歌手名称3'},
        {id: 114, name: 'xvagsyvcbhsdbchds'},
        {id: 115, name: '歌手名称1'},
        {id: 116, name: 'The Name of the singer 6'},
        {id: 117, name: 'The Name of the singer 7'},
        {id: 118, name: '歌手名称8'},
        {id: 119, name: '歌手名称9'},
        {id: 120, name: 'The Name of the singer 10'}
      ],
      allSingerList: [
        {id: 1111, name: '歌手名称11'},
        {id: 1112, name: 'The Name of the singer 12'},
        {id: 1113, name: '歌手名称13'},
        {id: 1114, name: 'uriowqnofnvxst'},
        {id: 1115, name: '歌手名称15'},
        {id: 1116, name: 'The Name of the singer 16'},
        {id: 1117, name: 'The Name of the singer 17'},
        {id: 1118, name: '歌手名称18'},
        {id: 1119, name: '歌手名称19'},
        {id: 1120, name: 'The Name of the singer 110'},
        {id: 1121, name: '歌手名称11'},
        {id: 1122, name: 'The Name of the singer 12'},
        {id: 1123, name: '歌手名称13'},
        {id: 1124, name: 'uriowqnofnvxst'},
        {id: 1125, name: '歌手名称15'},
        {id: 1126, name: 'The Name of the singer 16'},
        {id: 1127, name: 'The Name of the singer 17'},
        {id: 1128, name: '歌手名称18'},
        {id: 1129, name: '歌手名称19'},
        {id: 1130, name: 'The Name of the singer 110'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .singer {
    &-left {
      width:20%; height:100%; padding-top:12px; box-sizing:border-box; color:#999;
    }
    &-category {
      width:85%; margin:0 auto;
      &-cell {
        margin-top:8px; padding-bottom:8px;
        &-title {
          font-size:20px; font-weight:700; line-height:2em; color:#DDD;
        }
        &-link {
          height:32px; margin-bottom:8px; display:block; line-height:31px; color:#AAA;
          > .dot {
            width:6px; height:6px; margin:12.5px 15px; background:#999; float:left; opacity:0;
          }
          &:hover {
            color:#EEE; cursor:pointer;
            > .dot {
              opacity:1;
            }
          }
          &.active {
            color:#00d8ff;
            > .dot {
              opacity:1;
              background:#00d8ff;
            }
          }
        }
      }
    }

    &-right {
      padding:0 3%; flex:1; box-sizing:border-box;
    }

    &-nav {
      width:100%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;
      &-icon {
        margin-right:8px; color:#00d8ff; font-size:32px;
      }
      &-title {
        font-size:23px; font-weight:700;
      }
    }
  }
</style>
