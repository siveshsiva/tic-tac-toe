const winning_moves =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

const checkWinner=(squares)=>{
   for(let i = 0; i< winning_moves.length;i++)
   {
    const [a,b,c] = winning_moves[i]
    if(squares[a] === "X" && squares[b]==="X" && squares[c]==="X")
    {
        return "X"
    }
    else if(squares[a] === "O" && squares[b]==="O" && squares[c]==="O")
    {
        return "O"
    }
    else if(!squares.includes(null))
    {
        return "DRAW"
    }
   }
   return null
}


export default checkWinner