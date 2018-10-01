var doggyplayground = document.getElementById('dogs')
var doggies = ['images/dog1.png', 'images/dog2.png', 'images/dog3.png', 'images/dog4.png', 'images/dog5.png']
 
function displayimages(images){
    var targetimage = images.shift() // process doggies images one at a time
    if (targetimage){ // if not end of array
        getImage(targetimage).then(function(url :string){ // load image then...
            var dog = document.createElement('img')
            dog.setAttribute('src', url)
            doggyplayground.appendChild(dog) // add image to DIV
            displayimages(images) // recursion- call displayimages() again to process next image/doggy
        }).catch(function(url){ // handle an image not loading
            console.log('Error loading ' + url)
            displayimages(images) // recursion- call displayimages() again to process next image/doggy
        })
    }
}

function getImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        img.onload = function(){
            resolve(url)
        }
        img.onerror = function(){
            reject(url)
        }
        img.src = url
    })
}
 
displayimages(doggies)