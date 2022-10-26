<template>
    <div>
        <h3>My Board</h3>
        <div class="boards-collection"></div>
        <span v-if="fetchingData">Loading...</span>
        <input
         type="text"
         placeholder="Add a board"
         v-model="boardName"
         @keyup.enter="add()"
        />
        <board-card
         v-for="(board, index) in boards"
         :key="index"
         :name="board.name"
         :id="board.id">
        </board-card>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import BoardCard from '@/components/BoardCard'
export default {
    name: 'home-view',
    components: { BoardCard },
    data () {
        return {
         boardName: '',
        }
    },
    computed: {
    ...mapState([
      'boards',
      'fetchingData',
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
    }
  },
  created () {
    this.fetchBoards({ user: 1 })
  }

}
</script>

<style scoped>
  h3 {
    text-align: left;
    margin: 1.5rem;
  }

  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;
  }
  ::placeholder {
    color: white;
   }
   :focus,:active {
    background-color: white;
    color: #546E7A;
   }
</style>
