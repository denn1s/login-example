import render from '../utils/render.js'

const root = document.getElementById('root')

window.currentPage = { page: SeriesPage, params: null }

window.navigate = (path) => {
  // Split the path into parts (e.g., "edit/1" -> ["edit", "1"])
  const [pageName, id] = path.split('/')

  // Determine the page to render based on the path
  let page
  let params = null

  if (pageName === 'register') {
    // TODO
  } else if (pageName === 'login') {
    // TODO
  } else {
    // login page
    // TODO
  }

  // Update the current page
  window.currentPage = { page, params }

  // Re-render the app
  render(root, window.currentPage)
}

// Export the current page for the initial render
export const getCurrentPage = () => window.currentPage

