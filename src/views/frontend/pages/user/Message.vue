<template>
  <div id="homeLayout">

    <div class="user-message-category">
      <dl>
        <dt class="user-message-category-title box-shadow">我的消息</dt>

        <dd v-for="(item, index) in messageCategory" :key="`category${index}`" class="box-shadow">
          <div @click="changeMessageType(item.id)" :class="{active: type === item.id}" class="message-category-cell">
            <i :class="item.logo" class="message-category-cell-logo mh-if"></i>
            <span class="message-category-cell-label">{{ item.name }}</span>
          </div>
        </dd>
      </dl>
    </div>

    <div class="user-message-container box-show">
      <component :is="`${type}-group`" />
    </div>

  </div>
</template>

<script>
import FeedbackGroup from '../../../../components/frontend/Message/Feedback/FeedbackGroup.vue'
import CommentGroup from '../../../../components/frontend/Message/Comment/CommentGroup.vue'
import NotifyGroup from '../../../../components/frontend/Message/Notify/NotifyGroup.vue'

export default {
  name: 'Message',

  components: {
    FeedbackGroup, CommentGroup, NotifyGroup
  },

  data () {
    return {
      type: 'feedback',

      messageCategory: [
        {id: 'feedback', logo: 'mail', name: '私信'},
        {id: 'comment', logo: 'feedback', name: '评论'},
        {id: 'notify', logo: 'horn', name: '通知'}
      ]
    }
  },

  methods: {
    changeMessageType (type = 'comment') {
      this.type = type
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .user-message-category {
    width:20%; height:100%;

    &-title {
      width:100%; height:68px; font-size:22px; font-weight:700; line-height:75px; text-indent:1em;
    }

    .message-category-cell {
      width:100%; height:53px; display:flex; flex-direction:row; align-items:center; cursor:pointer;

      &-logo {
        margin:0 10px 0 18px; font-size:23px;
      }
      &-label {
        color:#AAA;
      }

      &:hover > .message-category-cell-label {
        color:#EEE;
      }
      &.active {
        > .message-category-cell-label {
          color:#00d8ff;
        }
        background:#1D1D1D;
      }
    }
  }

  .user-message-container {
    padding:8px; flex:1;
  }
</style>
