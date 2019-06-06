import Vue from 'vue'
import Router from 'vue-router'
import RoomList from '@/components/view/RoomList'
import AddRoom from '@/components/view/AddRoom'
import JoinRoom from '@/components/view/JoinRoom'
import ChatRoom from '@/components/view/ChatRoom'
import LoginPage from '@/components/view/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/room-list',
      name: 'RoomList',
      component: RoomList
    },
    {
      path: '/add-room',
      name: 'AddRoom',
      component: AddRoom
    },
    {
      path: '/join-room/:id',
      name: 'JoinRoom',
      component: JoinRoom
    },
    {
      path: '/chat-room/:id/:nickname',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    }

  ]
})
