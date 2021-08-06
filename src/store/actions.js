import { PLAY_MODE } from '@/assets/js/constant'
import { shuffle } from '../assets/js/util'

export function selectPlay ({ commit }, { list, index }) {
  commit('setPlayingState', true)
  commit('setSequenceList', list)
  commit('setPlaylist', list)
  commit('setPlayMode', PLAY_MODE.sequence)
  commit('setCurrentIndex', index)
  commit('setFullScreen', true)
}

export function randomPlay ({ commit }, list) {
  commit('setPlayingState', true)
  commit('setSequenceList', list)
  commit('setPlaylist', shuffle(list))
  commit('setPlayMode', PLAY_MODE.random)
  commit('setCurrentIndex', 0)
  commit('setFullScreen', true)
}
