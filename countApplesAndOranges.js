function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0; 
    let orangeCount = 0; 

    for(var i = 0; i < apples.length; i++){
        if((a + apples[i]) >= s)
            appleCount++;
    }

    for(var i = 0; i < oranges.length; i++){
        if((oranges[i] + b) <= t)
            orangeCount++;
    }

    return [appleCount, orangeCount];

}