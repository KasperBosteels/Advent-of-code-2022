        using System.Collections.Generic;
        using System;
        string text = System.IO.File.ReadAllText(@"../input.txt");
        List<int> elfCallorydb = new List<int>();
        string[] temp= text.Split("\n");
        
        int itemasint=0;
        foreach (var item in temp)
        {
                
                if(item.Length>=3){
                        itemasint+=Convert.ToInt32(item);
                }else{
                        elfCallorydb.Add(itemasint);
                        itemasint=0;
                }
        }
       System.Console.WriteLine(elfCallorydb[0]);