

TODO

- Upload articles
- favicon
- Put an Id at each image (to make an script in the future)

- serve paginator and change "toc" directory

Program: 
iterate 5 elements by nameA, put 0-9 from a dictionary in;
iterate 5 elements by nameB, put 10-21 from a dictionary in;
and so

paste the program in Index and each toc 



MY SCRIPS ON TERMINAL

1.
map a list (each line in camel case) into a list of folders
https://textedit.tools/camelcase
https://planetcalc.com/7891/ or number list maker

2.
rename a list of files

Notice: if the list should start at 37, for example, I declare a=38

a=1
for i in *.jpg; do
  new=$(printf "%04d.jpg" "$a") #04 pad to length of 4
  mv -i -- "$i" "$new"
  let a=a+1
done

3.
Create folders from a .txt list

cat list.txt | xargs mkdir

4.
regex to match all img tags (delete images of books)

<img\s+[^>]*src="([^"]*)"[^>]*>
<span\s+*>





