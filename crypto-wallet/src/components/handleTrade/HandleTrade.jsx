export default function HandleTrade(id) {
   if (id === "Buy") {
      return (
        <div>
          <p>Buy!!!</p>
        </div>
      )
    }
    else if (id === "Sell") {
        return (
            <div>
              <p>Sell!!!</p>
            </div>
          )
    }
    else if (id === "Convert") {
        return (
            <div>
              <p>Convert!!!</p>
            </div>
          )
    }
}