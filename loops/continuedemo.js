let i = 1;

while(i <= 10) {
    if( i % 7 == 0) {
        i++;
        continue;
    }
    console.log(i);
    i += 1;
}
