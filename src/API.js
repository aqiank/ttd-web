const BASE_URL = 'http://localhost:5000'

export default {
  fetchItems: async function() {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.open('GET', BASE_URL + '/items');
      req.addEventListener('readystatechange', () => {
        if (req.readyState === 4) {
          if (req.status === 200) {
            resolve(req)
          } else {
            reject(req)
          }
        }
      })

      req.send();
    })
  },

  createItem: async function(data) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()

      req.open('POST', BASE_URL + '/item')
      req.setRequestHeader('Content-Type', 'application/json')
      req.addEventListener('readystatechange', () => {
        if (req.readyState === 4) {
          const res = JSON.parse(req.responseText)

          if (res.status === 'ok') {
            resolve(res)
          } else {
            reject(res)
          }
        }
      })

      req.send(JSON.stringify(data))
    })
  },

  updateItem: async function(data) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()

      req.open('PUT', BASE_URL + '/item/' + this.$store.state.eventForm.id)
      req.setRequestHeader('Content-Type', 'application/json')
      req.addEventListener('readystatechange', () => {
        if (req.readyState === 4) {
          const res = JSON.parse(req.responseText)

          if (res.status === 'ok') {
            resolve(res)
          } else {
            reject(res)
          }
        }
      })

      req.send(JSON.stringify(data))
    })
  },

  deleteItem: async function(id) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()

      req.open('DELETE', BASE_URL + '/item/' + id)
      req.addEventListener('load', () => {
        const res = JSON.parse(req.responseText)

        if (req.readyState === 4) {
          if (res.status === "ok") {
            resolve(res)
          } else {
            reject(res)
          }
        }
      })

      req.send()
    })
  },

  generate: async function(typ) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()

      req.open('POST', BASE_URL + '/generate/' + typ)
      req.addEventListener('load', () => {
        if (req.readyState === 4) {
          const res = JSON.parse(req.responseText)

          if (res.status === 'ok') {
            resolve(res)
          } else {
            reject(res)
          }
        }
      })

      req.send()
    })
  },
}