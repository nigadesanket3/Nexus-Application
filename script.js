function one()
{
    number=5;
    for(i = number; i >= 1; i--)
        {
             
            // Inner loop print space
            for(j = i; j < number; j++)
            {
                document.write("&nbsp;");
            }
             
            // Inner loop print star
            for(j = 1; j <= (2 * i - 1); j++)
            {
                document.write("*");
            }
             
            // Ending line after each row
            document.write("<br>");
        } 
    
    document.getElementById("demo").innerHTML = text;
    
      }
