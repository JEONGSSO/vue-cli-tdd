<template>
  <div class="board_wrap">
    <h2 class="board_title">{{this.board.title}}</h2>
    <ul class="card_wrap">
      <li class="card_box" v-for="(list, idx) in board.lists" :key="list.id">
        <div class="card_header">
          <b
            class="card_title"
            v-show="!list.titleEdit"
            @click="titleModifyToggle(list.id, list.pos, idx)"
          >
            {{list.title}}
          </b>
          <input type="text"
            class="card_title_input"
            v-show="list.titleEdit"
            :value="list.title"
            ref="card_input"
          >
          <button class="card_option_btn" @click="cardOption(idx)">
            <svg v-for="(circle, idx) in 3" :key="idx" width="5" height="5">
              <circle cx="2" cy="2" r="2" fill="#6b778c"></circle>
            </svg>
          </button>
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
      <li class="card_box new_box">
        <button class="add_list_btn" @click="listAddModeToggle" v-if="!isAddList">
          <svg width="10" height="10" viewBox="0 0 24 24">
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
          </svg>
          Add Another List
        </button>
        <div v-else class="add_wrap">
          <input type="text" class="add_input" v-model="listTitle"/>
          <div class="add_footer">
            <button class="add_btn"
                    @click="addList()">
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
    };
  },
  methods: {
    async getBoard() {
      const { bid } = this;
      const { data } = await this.$axios('GET', `boards/${bid}`);
      this.board = data.item;
    },
    cardOption(index) {
      // 옵션 메뉴 열리게하고 카드 -> 리스트로 변경
      console.log(index);
      this.deleteCard();
    },
    async deleteCard() {
      this.$axios('DELETE', `lists/${1}`);
    },
    titleModifyToggle(cardId, pos, index) {
      this.board.lists[index].titleEdit = !this.board.lists[index].titleEdit;
      if (this.board.lists[index].titleEdit) {
        this.$forceUpdate();
        document.addEventListener('click', (e) => this.outsideClick(e, cardId, pos, index));
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
        const {
          $axios,
          bid,
          listTitle,
        } = this;
        const { data } = await $axios('POST', 'lists', {
          title: listTitle,
          boardId: bid,
          pos: bid,
        });
        this.board.lists.push(data.item);
      } catch (e) {
        console.log(e);
      }
    },
    async outsideClick({ target }, cardId, pos, index) {
      const elem = this.$refs.card_input[0];
      const titleEl = document.querySelector('.card_title');
      if (titleEl === target) return;
      if (target !== elem && !elem?.contains?.(target)) {
        this.board.lists[index].titleEdit = false;
        this.$forceUpdate();
        document.removeEventListener('click', this.outsideClick);
        const tt = await this.$axios('PUT', `cards/${cardId}`, {
          title: elem.value,
          description: 'sss',
          listId: cardId,
          pos: pos / 1,
        });
        console.log(tt);
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
