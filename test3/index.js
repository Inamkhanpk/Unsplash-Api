function areRotations( str1,  str2)
{
    
    return (str1.length == str2.length) &&
           ((str1 + str1).indexOf(str2) != -1);
}


    var str1 = "AACD";
    var str2 = "ACDA";

    if (areRotations(str1, str2))
        document.write("Strings are rotations of each other");
    else
        document.write("Strings are not rotations of each other");