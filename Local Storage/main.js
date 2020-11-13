// Functions
// localStorage.setItem('name', 'Shoobert');

// Object
// localStorage.name = 'Shoobert';

// Object
// localStorage['name'] = 'Shoobert';



// localStorage.name
//or
// localStorage.getItem('name')
//'Shoobert'


// localStorage.name = "yana"
// console.log(localStorage.name)

// localStorage.removeItem('name')
//or
// localStorage.clear()



// localStorage.personalData = JSON.stringify({
//   averageTimeOnSite: {unit: "hr", amt: 9},
//   probabilityOfFriends: 0.02,
//   commonKeywords: ["salsa for one", "1 vs. none Chess"]
// })

// let userStuff = JSON.parse(localStorage.personalData)

// console.log(userStuff.probabilityOfFriends) //prints 0.02


//spot check1

// localStorage.userStorage = JSON.stringify({
//   darkMode: true,
//   showSideNav: false,
//   defaultResultCount: 9,
//   latestMarks: {
//       sectionA: 92,
//       sectionB: 11
//   },
//   cart: [
//       { id: 3112, count: 2 },
//       { id: 812, count: 16 }
//   ]
// })

// let userStorage = JSON.parse(localStorage.userStorage || "[]")

// console.log(userStorage.cart[1].count)




//exrec

let wisdom = []

let input

let names = JSON.parse(localStorage.wisdom || "[]")

if(names){
  for(let n of names){
    $("#userNames").append(`
    <div class="line-delete" data-id="${n.text}">
    <i class="fas fa-trash delete"></i>
    <span>${n.text}</span>
    </div>`)
  }
}

let isInside

let p

$("#save").click(function(){
  $("#userNames").empty()
  input = $("input").val()
  $("#userNames").append(`<div>${input}</div>`)
  wisdom.push({"text" : input })
  $("input").val("")

  if(!(wisdom.length % 2)){
    if(localStorage.wisdom){
      p = JSON.parse(localStorage.wisdom)
      for(let i in wisdom){
        isInside = false
        for(let x in p){
          if(p[x].text == wisdom[i].text){
            isInside = true
          }
        }
        if (!isInside){
          p.push(wisdom[i])
        }
      }
      localStorage.wisdom = JSON.stringify(p)
    }else{
      localStorage.wisdom = JSON.stringify(wisdom)
    }
  }
})

$("#clear").click(function(){
  localStorage.removeItem("wisdom")
  $("#userNames").empty()
})

$("#userNames").click(".delete" , function(){
  $(this).closest(".line-delete").remove()

  let id = $(this).closest(".line-delete").data().id

  let storage = JSON.parse(localStorage.wisdom)

  for(let i in storage){
    if(storage[i].text == id){
      storage.splice(i, 1)
    }
  }
  localStorage.wisdom = JSON.stringify(storage)
})