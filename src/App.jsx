
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


function App() {
  const styleDecimal = "list-decimal";
  const styleDisc = "list-disc";
  
  function renderSubList(item, style) {
    const finalStyle = style === styleDisc ? styleDecimal : styleDisc

    return (
      <ul className={`ps-10 ${finalStyle}  list-disc`}>
        {item.map((subItem, index) => {
          return (
            <li key={subItem.name + index} >
              {subItem.name}
              {subItem.subList && subItem.subList.length > 0 &&
                renderSubList(subItem.subList, finalStyle)
              }
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="font-semibold text-2xl p-4">
      <ul className="list-decimal ps-10">
        {list.map((item, index) => {
          return (
            <li key={item.name + index}>
              {item.name}
              {item.subList && item.subList.length > 0 &&
                renderSubList(item.subList, styleDecimal)
              }
            </li>
          )
        })}
      </ul>


    </div>
  )
}

export default App
