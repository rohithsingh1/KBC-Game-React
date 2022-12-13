import React ,{ useMemo } from "react"

const moneyPyramid =
      [
        { id: 1, amount: "$ 1000",value:1000 },
        { id: 2, amount: "$ 2000",value:2000  },
        { id: 3, amount: "$ 3000",value:3000  },
        { id: 4, amount: "$ 5000",value:5000  },
        { id: 5, amount: "$ 10,000",value:10000  },
        { id: 6, amount: "$ 20,000",value:20000  },
        { id: 7, amount: "$ 40,000",value:40000  },
        { id: 8, amount: "$ 80,000",value:80000  },
        { id: 9, amount: "$ 1,60,000",value:160000  },
        { id: 10, amount: "$ 3,20,000" ,value:320000 },
        { id: 11, amount: "$ 6,40,000" ,value:640000 },
        { id: 12, amount: "$ 12,50,000",value:1250000  },
        { id: 13, amount: "$ 25,00,000",value:2500000  },
        { id: 14, amount: "$ 50,00,000" ,value:5000000 },
        { id: 15, amount: "$ 1 crore",value:10000000 },
      ].reverse()

export default moneyPyramid