import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [
      {id: '1', title: 'Iron Maiden', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis sed odio. Nec tincidunt praesent semper feugiat. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida. Eget dolor morbi non arcu risus quis varius. In ante metus dictum at tempor commodo. Mi bibendum neque egestas congue quisque egestas. Mollis nunc sed id semper risus in. Laoreet sit amet cursus sit. Quisque egestas diam in arcu cursus euismod. Facilisis leo vel fringilla est. Fermentum posuere urna nec tincidunt praesent. Aliquam purus sit amet luctus venenatis lectus. Nam at lectus urna duis convallis convallis tellus id. At elementum eu facilisis sed odio morbi quis. Pellentesque elit eget gravida cum sociis natoque penatibus et. Varius sit amet mattis vulputate enim.", postedOn: 'November 5, 2020', author: 'Joe Satriani', categories: ['Heavy Metal']},
      {id: '2', title: 'Faith No More', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis sed odio. Nec tincidunt praesent semper feugiat. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida. Eget dolor morbi non arcu risus quis varius. In ante metus dictum at tempor commodo. Mi bibendum neque egestas congue quisque egestas. Mollis nunc sed id semper risus in. Laoreet sit amet cursus sit. Quisque egestas diam in arcu cursus euismod. Facilisis leo vel fringilla est. Fermentum posuere urna nec tincidunt praesent. Aliquam purus sit amet luctus venenatis lectus. Nam at lectus urna duis convallis convallis tellus id. At elementum eu facilisis sed odio morbi quis. Pellentesque elit eget gravida cum sociis natoque penatibus et. Varius sit amet mattis vulputate enim.", postedOn: 'November 4, 2020', author: 'Steve Vai', categories: ['Death Metal']},
      {id: '3', title: 'Guns N Roses', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis sed odio. Nec tincidunt praesent semper feugiat. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida. Eget dolor morbi non arcu risus quis varius. In ante metus dictum at tempor commodo. Mi bibendum neque egestas congue quisque egestas. Mollis nunc sed id semper risus in. Laoreet sit amet cursus sit. Quisque egestas diam in arcu cursus euismod. Facilisis leo vel fringilla est. Fermentum posuere urna nec tincidunt praesent. Aliquam purus sit amet luctus venenatis lectus. Nam at lectus urna duis convallis convallis tellus id. At elementum eu facilisis sed odio morbi quis. Pellentesque elit eget gravida cum sociis natoque penatibus et. Varius sit amet mattis vulputate enim.", postedOn: 'November 3, 2020', author: 'Eric Clapton', categories: ['Groove Metal']},
      {id: '4', title: 'Pantera', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis sed odio. Nec tincidunt praesent semper feugiat. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida. Eget dolor morbi non arcu risus quis varius. In ante metus dictum at tempor commodo. Mi bibendum neque egestas congue quisque egestas. Mollis nunc sed id semper risus in. Laoreet sit amet cursus sit. Quisque egestas diam in arcu cursus euismod. Facilisis leo vel fringilla est. Fermentum posuere urna nec tincidunt praesent. Aliquam purus sit amet luctus venenatis lectus. Nam at lectus urna duis convallis convallis tellus id. At elementum eu facilisis sed odio morbi quis. Pellentesque elit eget gravida cum sociis natoque penatibus et. Varius sit amet mattis vulputate enim.", postedOn: 'November 2, 2020', author: 'Stevie Ray Vaughan', categories: ['Thrash Metal']},
      {id: '5', title: 'Sepultura', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis sed odio. Nec tincidunt praesent semper feugiat. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida. Eget dolor morbi non arcu risus quis varius. In ante metus dictum at tempor commodo. Mi bibendum neque egestas congue quisque egestas. Mollis nunc sed id semper risus in. Laoreet sit amet cursus sit. Quisque egestas diam in arcu cursus euismod. Facilisis leo vel fringilla est. Fermentum posuere urna nec tincidunt praesent. Aliquam purus sit amet luctus venenatis lectus. Nam at lectus urna duis convallis convallis tellus id. At elementum eu facilisis sed odio morbi quis. Pellentesque elit eget gravida cum sociis natoque penatibus et. Varius sit amet mattis vulputate enim.", postedOn: 'November 1, 2020', author: 'Jimi Hendrix', categories: ['Grunge']}
    ],
    search: '',
    login: true,
    categs: ['Heavy Metal', 'Death Metal', 'Groove Metal', 'Thrash Metal', 'Grunge'],
    auths: ['Joe Satriani', 'Steve Vai', 'Eric Clapton', 'Stevie Ray Vaughan', 'Jimi Hendrix']
  },
  mutations: {
		postIt: (state, payload) => {
			state.posts.unshift(payload)
		},
    searchIt: (state, payload) => {
      state.search = payload
    },
    setLogin: (state) => {
      state.login = !state.login
    },
    deletePost: (state, payload) => {
      let newPosts = state.posts.filter(post => {
        return post.id !== payload
      });
      state.posts = newPosts
    }
  },
  actions: {
    postIt: (context, payload) => {
      context.commit('postIt', payload);
    },
    searchIt: (context, payload) => {
      context.commit('searchIt', payload);
    },
    setLogin: (context) => {
      context.commit('setLogin');
    },
    deletePost: (context, payload) => {
      context.commit('deletePost', payload);
    }
  }
});