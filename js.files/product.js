const body = document.getElementById('body')
const imgwrap = document.getElementById('imgwrap')
const params = new URLSearchParams(window.location.search)
const idE = params.get("id")
fetch("https://fakestoreapi.com/products/" + idE).then(the => the.json()).then(data => {



    const DIV = document.createElement('div')
    DIV.classList.add("wrapper")
    body.append(DIV)

    const image = document.createElement('img')
    image.src = data.image
    image.className = 'image'
    imgwrap.append(image)
    DIV.append(imgwrap)

    const div = document.createElement('div')
    div.className = 'div'
    DIV.append(div)


    const id = document.createElement('p')
    id.innerHTML = 'id:' + data.id
    id.className = 'id'
    div.append(id)


    const title = document.createElement('p')
    title.innerHTML = 'Title:' + data.title
    title.className = 'title'
    div.append(title)


    const price = document.createElement('p')
    price.innerHTML = 'Price:' + data.price + "$"
    price.className = 'price'
    div.append(price)


    const descraption = document.createElement('p')
    descraption.innerHTML = 'Descraption:' + data.description
    descraption.className = 'descraption'
    div.append(descraption)




    const category = document.createElement('p')
    category.innerHTML = 'Category:' + data.category
    category.className = 'category'
    div.append(category)




    const rate = document.createElement('p')
    rate.innerHTML = data.rating.rate
    rate.className = 'rating'
    div.append(rate)

    const count = document.createElement('p')
    count.innerHTML = data.rating.count
    count.className = 'count'
    div.append(count)
})
