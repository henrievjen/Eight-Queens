$(document).ready(function() {
    let eightQueens = (strArr) => {

        strArr = strArr.replace(/["']/g,'').replace(/\[/g, '').replace(/]/g, '').split(", ");
        
        try {
            for(let l = 0; l < 8; l++) {

                let x = strArr[l].charAt(1);
                let y = strArr[l].charAt(3);

                if(x > 8 || y > 8 || isNaN(x) || isNaN(y)) {
                    return;
                }
            }
        }
        catch(err) {
            return;
        }
    
        for(let i = 0; i < 8; i++) {
            
            let x = strArr[i].charAt(1);
            let y = strArr[i].charAt(3);
            
            for(let k = 1; k < 8; k++) {
                if(i == k) {
                    continue;
                }

                if((strArr[k].charAt(1) - x) == (strArr[k].charAt(3) - y)) {
                    return "(" + x + "," + y + ")";
                }
            }

            for(let j = 1; j < 8; j++) {
                if(i == j) {
                    continue;
                }

                if((strArr[j].charAt(1) == x) || (strArr[j].charAt(3) == y)) {
                    return "(" + x + "," + y + ")";
                }
            }
        }

      return true; 

    }
    
    $('.check-answer').mousedown(function() {
        $(this).css("transform", "scale(.97)");
    });
    
    $('.check-answer').mouseup(function() {
        $(this).css("transform", "scale(1)");
    });
    
    $('.check-answer').click(function() {
        let answer = eightQueens($('.textbox').val());
        if(answer == true) {
            $('.answer').css("color", "#008000");
            $('.answer').text("Congratulations, you are successful!");
        }
        else if(answer == undefined) {
            $('.answer').css("color", "#ff6347");
            $('.answer').text("Please enter valid coordinates");
        }
        else {
            $('.answer').css("color", "#000");
            $('.answer').text("Sorry, the queen at position " + answer + " hits another queen");
        }
    });
    
    $(".textbox").keyup(function(event) {
        if (event.keyCode == 13) {
            $(".check-answer").click()
        }
      });
});