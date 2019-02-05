var dungeon = document.getElementById("dungeon");


function dungeonloop()
{
    notNcount = 0;
    alert("welcome to the dungeon");
    while(true)
    {
        userinput = prompt("do you want to quit?");
        if(userinput === "n")
        {
            alert(("you didn't click n" + notNcount + " times."));
            break;
        }
        else
            {
                notNcount++;
            }

    }
}

dungeon.onclick = dungeonloop;