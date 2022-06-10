import {showModal} from './modal'
export function showWinnerModal(fighter) {
  // call showModal function 
  const title = `Winner is - ${fighter.name}`;
  const bodyElement = `Our congratulations!!! You are the best fighter!`
  const onClose =   () => window.location.reload()
  showModal({ title, bodyElement, onClose })
}
