
var list = [
  {
    name: "Menu 1",
    subList: [{
      name: "Menu i"
    },
    {
      name: "Menu ii",
      subList: [{
        name: "Menu ichi"
      },
      {
        name: "Menu ni"
      }
      ]
    },
    {
      name: "Menu iii"
    }
    ]
  },
  {
    name: "Menu 2",
    subList: [{
      name: "Menu i"
    },
    {
      name: "Menu ii",
      subList: [{
        name: "Menu ichi"
      },
      {
        name: "Menu ni"
      }
      ]
    },
    {
      name: "Menu iii"
    },
    {
      name: "Menu iv"
    }
    ]
  },
  {
    name: "Menu 3",
    subList: [{
      name: "Menu i"
    },
    {
      name: "Menu ii",
      subList: [{
        name: "Menu ichi"
      },
      {
        name: "Menu ni"
      },
      {
        name: "Menu san"
      }
      ]
    },
    {
      name: "Menu iii"
    }
    ]
  }
]
const styleDecimal = "list-decimal";
const styleDisc = "list-disc";
function toggleSubmenu(e) {
  e.stopPropagation();
  let subMenu = e.target.querySelector('ul');
  if (!subMenu) {
    return
  }
  if (subMenu.style.display === "none" || !subMenu.style.display) {
    subMenu.style.display = "block"
  }
  else {
    subMenu.style.display = "none"
  }
}

function RenderSubList(item, style) {
  var finalStyle = style === styleDisc ? styleDecimal : styleDisc

  return (
    <ul className={`ps-10 ${finalStyle} hidden`}>
      {item.map((subItem, index) => {
        return (
          <li key={subItem.name + index} onClick={toggleSubmenu} 
          className={`${subItem.subList&&subItem.subList.length>0?'cursor-pointer':'cursor-default'}`}>
            {subItem.name}
            {subItem.subList && subItem.subList.length > 0 &&
              RenderSubList(subItem.subList, finalStyle)
            }
          </li>
        )
      })}
    </ul>
  )
}

function App() {
  return (
    <div className="font-semibold text-2xl p-4">
      <ul className="list-decimal ps-10">
        {list.map((item, index) => {
          return (
            <li key={item.name + index} onClick={toggleSubmenu} className={`${item.subList.length>0&&'cursor-pointer'}`}>
              {item.name}
              {item.subList && item.subList.length > 0 &&
                RenderSubList(item.subList, styleDecimal)
              }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;