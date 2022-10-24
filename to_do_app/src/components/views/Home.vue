<template>
    <div>
        <h3>My Board</h3>
        <div class="boards-collection"></div>
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
import BoardCard from '@/components/BoardCard'
export default {
    name: 'home-view',
    components: { BoardCard },
    data () {
        return {
         boardName: '',
         boards: [
            { id: 1, name: 'tareas' },
            { id: 2, name: 'lista de la compra' }
         ]
        }
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
