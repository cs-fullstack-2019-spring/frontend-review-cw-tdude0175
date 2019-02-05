var dungeon = document.getElementById("dungeon");


function dungeonloop()
{
    notNcount = 0;  //set the [notN] count inside the function in case comething else is using notNcount
    alert("welcome to the dungeon");
    while(true)
    {   //{while(true)} not necessary as well as {if} statement is not necessary just flavor
        userinput = prompt("do you want to quit?");
        if(userinput === "n")
        {
            alert(("you didn't click n" + notNcount + " times."));
            break;
        }
        else
            {   //not count used for problem 2 specifically, not really necessary
                notNcount++;
            }

    }
}
//dungeon defines the button on html page for use
dungeon.onclick = dungeonloop;