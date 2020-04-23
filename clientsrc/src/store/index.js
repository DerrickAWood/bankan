import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    activeList: {},
    tasks: {},
    activeTask: {},
    comments: {},
    activeComment: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setActiveList(state, list) {
      state.activeList = list
    },
    setTasks(state, tasks) {
      //state.tasks = tasks
      Vue.set(state.tasks, tasks.listId, tasks.data)
    },
    setActiveTask(state, task) {
      state.activeTask = task
    },
    setComments(state, comments) {
      //state.comments = comments
      Vue.set(state.comments, comments.taskId, comments.data)
    },
    setActiveComment(state, comment) {
      state.activeComment = comment
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({
      commit
    }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({
      commit,
      dispatch
    }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
          console.log(res.data);

        })
    },
    addBoard({
      commit,
      dispatch
    }, boardData) {
      console.log(boardData);
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },

    getBoard({
      commit,
      dispatch
    }, boardId) {
      api.get('boards/' + boardId)
        .then(res => {
          commit('setActiveBoard', res.data)
          console.log(res.data);

        })
    },

    async deleteBoard({
      commit,
      dispatch
    }, board) {
      debugger
      let res = await api.delete('boards/' + board)
    },
    //#endregion


    //#region -- LISTS --

    getList({
      commit,
      dispatch
    }, boardId) {
      api.get('boards/' + boardId + '/list')
        .then(res => {
          commit('setLists', res.data)
          console.log(res.data);
        })
    },

    addList({
      commit,
      dispatch
    }, listId) {
      console.log(listId.boardId, "this from the store");
      api.post('list/', listId)
        .then(serverBoard => {
          dispatch('getList')
        })
    },

    addTask({
      commit,
      dispatch
    }, task) {
      api.post('task', task)
        .then(res => {
          dispatch('getTask', task.listId)
        })
    },

    async getTask({
      commit,
      dispatch
    }, listId) {
      let res = await api.get('list/' + listId + '/task')
      commit('setTasks', {
        data: res.data,
        listId: listId
      })
      console.log(res.data)
    },

    async moveTask({
      commit,
      dispatch
    }, newObject) {
      let res = await api.put('task/' + newObject.oldTaskId, newObject)
      dispatch('getTask', newObject.oldListId)
      dispatch('getTask', newObject.listId)

      // go get the tasks for each list again
    },

    async addComment({
      commit,
      dispatch
    }, comment) {
      let res = await api.post('comment', comment)
      dispatch('getComments', comment.taskId)
    },

    async getComments({
      commit,
      dispatch
    }, taskId) {
      let res = await api.get('task/' + taskId + '/comments')
      commit('setComments', {
        data: res.data,
        taskId: taskId
      })
      console.log(res.data)
    },

    async deleteComment({
      commit,
      dispatch
    }, commentId) {
      let res = await api.delete('comment/' + commentId)
    }


    //#endregion
  },

})