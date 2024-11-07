const calculate = (a,b,c,d,operation) => {
    switch (operation) {
        case "complex-sum":
            console.log((a+b)*(c+d));
            break;
        case "exponetial":
            if (b < 0 || d < 0) {
                console.log("0");
            } 
            else {
                console.log(a**b + c**d);     
            }
            break;
        case "quadratic":
            console.log(a**2+b**2+c**2+d**2);
            break;
        case "geometric":
            console.log(Math. sqrt(a*b) + Math. sqrt(c*d));
            break;
        case "conditional":
            if (a + b > c + d) {
                console.log((a-b)**2+(c*d));
                
            }
            else {
                if (a+b != 0) {
                    console.log(a+b+c+(d /(a+b)))
                    
                } 
                else {
                    console.log("0")


                    
                }
                
            }
            break;
        
        default:
            break;  
    }
}
calculate(5,5,5,5,"geometric")