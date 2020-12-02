<template>
  <div class="board_wrap">
    <h2 class="board_title">{{this.board.title}}</h2>
    <ul class="list_wrap">
      <li class="list_box" v-for="(list, idx) in board.lists" :key="list.id">
        <div class="list_header">
          <b
            class="list_title"
            v-show="!list.titleEdit"
            @click="titleModifyToggle(list.id, list.pos, idx)"
          >
            {{list.title}}
          </b>
          <input type="text"
            class="list_title_input"
            v-show="list.titleEdit"
            :value="list.title"
            ref="list_input"
          >
          <button class="list_option_btn" @click="deleteCard(list.id, idx)"></button>
        </div>
        <div>
          <ul class="card_list">
            <li v-for="card in list.cards" :key="card.id">
              <button class="card_view_btn btn">
                {{card.title}}
              </button>
            </li>
          </ul>
          <button class="card_create_btn btn"
            @click="cardAddModeToggle(list.id, idx)"
            v-if="!list.isCreate">
              <svg width="10" height="10" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
              </svg>
              Add a Card
          </button>
          <div v-else class="card_add_wrap add_wrap">
            <input type="text" class="add_input" :ref="`input_${list.id}`" />
            <div class="add_footer">
              <button class="add_btn"
                @click="addCard(list.id, list.pos, idx)">
                Add Card
              </button>
              <button class="close_btn" @click="cardAddModeToggle(list.id, idx)">
                <svg width="24" height="24">
                  <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" fill="#6b778c"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="list_box new_box">
        <button class="add_list_btn" @click="listAddModeToggle" v-if="!isAddList">
          <svg width="10" height="10" viewBox="0 0 24 24">
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
          </svg>
          Add Another List
        </button>
        <div v-else class="add_wrap">
          <input type="text" class="add_input" v-model="listTitle"/>
          <div class="add_footer">
            <button class="add_btn" @click="addList()">
              Add List
            </button>
            <button class="close_btn" @click="listAddModeToggle">
              <svg width="24" height="24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" fill="#6b778c"></path>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
    <Card v-if="cid" :cid="cid"/>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      bid: this.$route.params.bid,
      cid: this.$route.params.cid,
      board: [],
      isAddList: false,
      listTitle: '',
      lastListId: '',
      lastPos: '',
      lastListIndex: '',
    };
  },
  methods: {
    async getBoard() {
      const { bid } = this;
      const { data } = await this.$axios('GET', `boards/${bid}`);
      this.board = data.item;
    },
    async deleteCard(listId, index) {
      // 삭제 후 리스트에서 splice
      console.log(this.board.lists);
      this.$axios('DELETE', `lists/${listId}`);
      console.log(listId, index);
    },
    titleModifyToggle(listId, pos, index) {
      this.board.lists[index].titleEdit = !this.board.lists[index].titleEdit;
      if (this.board.lists[index].titleEdit) {
        this.$forceUpdate();
        this.lastListId = listId;
        this.lastPos = pos;
        this.lastListIndex = index;
        // 두번째 이상 리스트부터 타이틀 수정시 첫번째 타이틀 따라감 1202
        console.log(listId);
        console.log(pos);
        console.log(index);
        document.addEventListener('click', this.outsideClick);
      }
    },
    cardAddModeToggle(listId, idx) {
      this.board.lists[idx].isCreate = !this.board.lists[idx].isCreate;
      this.$forceUpdate();
    },
    async addCard(listId, listPos, idx) {
      try {
        const title = this.$refs[`input_${listId}`][0].value;
        const { data } = await this.$axios('POST', 'cards', {
          title,
          listId,
          pos: listPos,
        });
        this.board.lists[idx].cards.push(data.item);
        this.$refs[`input_${listId}`][0].value = '';
      } catch (e) {
        console.log(e);
      }
    },
    listAddModeToggle() {
      this.isAddList = !this.isAddList;
    },
    async addList() {
      try {
        const { $axios, bid, listTitle } = this;
        const { data } = await $axios('POST', 'lists', {
          title: listTitle,
          boardId: bid,
          pos: Math.floor(Math.random(1) * 10000),
        });
        this.board.lists.push(data.item);
      } catch (e) {
        console.log(e);
      }
    },
    async outsideClick({ target }) {
      const titleEl = document.querySelectorAll('.list_title');
      const inputEl = document.querySelectorAll('.list_title_input');
      if (titleEl[this.lastListIndex] === target || inputEl[this.lastListIndex] === target) return;
      document.removeEventListener('click', this.outsideClick);
      const elem = this.$refs.list_input[0];
      if (target !== elem && !elem?.contains?.(target)) {
        this.board.lists[this.lastListIndex].titleEdit = false;
        const { data } = await this.$axios('PUT', `lists/${this.lastListId}`, {
          title: elem.value,
          pos: this.lastPos / 1,
        });
        this.board.lists[this.lastListIndex] = data.item;
        this.$forceUpdate();
      }
    },
  },
  created() {
    this.getBoard();
  },
  watch: {
    $route({ params }) {
      this.bid = params.bid;
      this.cid = params.cid;
    },
  },
};
</script>
