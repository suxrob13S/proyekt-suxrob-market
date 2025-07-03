const wrapper = document.getElementById('wrapper')

fetch("https://fakestoreapi.com/products").then(the => the.json()).then(data => {

    

    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div')
        div.className = 'div'

        const image = document.createElement('img')
        image.src = data[i].image
        image.className = 'image'
        div.append(image)


        const id = document.createElement('p')
        id.innerHTML = 'id:' + data[i].id
        id.className = 'id'
        div.append(id)
        wrapper.append(div)

        const title = document.createElement('p')
        title.innerHTML = 'Title:' + data[i].title
        title.className = 'title'
        div.append(title)


        const price = document.createElement('p')
        price.innerHTML = 'Price:' + data[i].price
        price.className = 'price'
        div.append(price)

        const category = document.createElement('p')
        category.innerHTML = 'Category:' + data[i].category
        category.className = 'category'
        div.append(category)



        const btn = document.createElement('button')
        btn.className = 'btn'
        btn.innerHTML = 'Leran more'
        div.append(btn)


        btn.addEventListener('click',()=>{
            window.location.href = "product.html?id=" + data[i].id
        })
    }




})