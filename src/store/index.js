import { createStore } from 'vuex'

export default createStore({
  state: {
    listContacts: [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Fisher',
        selected: false,
      },
      {
        id: 2,
        firstName: 'James',
        lastName: 'Green',
        selected: false,
      },
      {
        id: 3,
        firstName: 'Kate',
        lastName: 'Williams',
        selected: false,
      },
      {
        id: 4,
        firstName: 'Joel',
        lastName: 'Neal',
        selected: false,
      },
      {
        id: 5,
        firstName: 'Victor',
        lastName: 'Rogers',
        selected: false,
      },
      {
        id: 6,
        firstName: 'Leroy',
        lastName: 'Stephens',
        selected: false,
      },
      {
        id: 7,
        firstName: 'Mark',
        lastName: 'Davis',
        selected: false,
      },
      {
        id: 8,
        firstName: 'Billy',
        lastName: 'Hawkins',
        selected: false,
      },
      {
        id: 9,
        firstName: 'Joel',
        lastName: 'Neal 2',
        selected: false,
      },
      {
        id: 10,
        firstName: 'Victor',
        lastName: 'Rogers 2',
        selected: false,
      },
      {
        id: 11,
        firstName: 'Leroy',
        lastName: 'Stephens 2',
        selected: false,
      },
      {
        id: 12,
        firstName: 'Mark',
        lastName: 'Davis 2',
        selected: false,
      },
      {
        id: 13,
        firstName: 'Billy',
        lastName: 'Hawkins 2',
        selected: false,
      },
      {
        id: 14,
        firstName: 'Joel',
        lastName: 'Neal 3',
        selected: false,
      },
      {
        id: 15,
        firstName: 'Victor',
        lastName: 'Rogers 3',
        selected: false,
      },
      {
        id: 16,
        firstName: 'Leroy',
        lastName: 'Stephens 3',
        selected: false,
      },
      {
        id: 17,
        firstName: 'Mark',
        lastName: 'Davis 3',
        selected: false,
      },
      {
        id: 18,
        firstName: 'Billy',
        lastName: 'Hawkins 3',
        selected: false,
      },
    ],
    chats: {
      1: [{
          id: 2,
          text: 'тебе тоже дарова брат',
          type: 'in',
          date: new Date(),
      },
      {
          id: 1,
          text: 'дарова брат',
          type: 'out',
          date: new Date(),
      }],
      2: [{
          id: 2,
          text: 'ты кто',
          type: 'in',
          date: new Date(),
      },
      {
          id: 1,
          text: 'привет, когда долг вернешь?',
          type: 'out',
          date: new Date(),
      }],
      3: [{
          id: 2,
          text: 'отвали',
          type: 'in',
          date: new Date(),
      },
      {
          id: 1,
          text: 'привет красотка',
          type: 'out',
          date: new Date(),
      }]
    },
    selectedContactId: 1,
  },
  getters: {
    getContacts(state) {
      return state.listContacts
    },
    getSortedContacts(state) {
      return state.listContacts.filter(item => item.id in state.chats).sort((item1, item2) => {return new Date(state.chats[item2.id][0].date) - new Date(state.chats[item1.id][0].date)}) // получение сортированных контактов с которыми имеется чат
    },
    getSelectedContactId(state) {
      return state.selectedContactId
    },
    getMessages(state) {
      return state.chats[state.selectedContactId]
    },
    getFullName(state) {
      const contact = state.listContacts.find(item => item.id === state.selectedContactId)
      return contact.firstName + ' ' + contact.lastName
    }
  },
  mutations: {
    setSelectedContactId(state, id) {
      state.selectedContactId = id
    },
    addMessage(state, [text, contactId, type]) {
      state.chats[contactId].unshift({
          id: new Date(),
          text: text,
          type: type,
          date: new Date()
      })
    },
    addNewChat(state, contactId) {
      state.chats[contactId] = [{
          id: new Date(),
          text: 'Привет',
          type: 'in',
          date: new Date()
        },
        {
          id: new Date(),
          text: 'Привет',
          type: 'out',
          date: new Date()
        }
      ]
    },
    setMessages(state, chats) {
      state.chats = chats
    }
  },
  actions: {
    saveMessage(context, [text, contactId, type]) {
      context.commit('addMessage', [text, contactId, type])
      
      localStorage.setItem('chats', JSON.stringify(context.state.chats))

    },
    saveNewChat(context, contactId) {
      context.commit('addNewChat', contactId)

      localStorage.setItem('chats', JSON.stringify(context.state.chats))
    },
    loadChats(context) {
      const chats = JSON.parse(localStorage.getItem('chats'))
      if(chats) {
        context.commit('setMessages', chats)
      }
    }
  },
})
