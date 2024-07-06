#include<iostream>
using namespace std;

char toLowercase(char ch)
{
    if(ch>='a'&& ch<='z')
    {
        return ch;
    }
    else
    {
        char temp = ch - 'A' + 'a';
        return temp;
    }
}

bool checkPalindrome(char a[],int n)
{
    int s=0;
    int e=n-1;
    while(s<=e)
    {
        if(a[s]!=a[e])
        {
            return 0;
        }
        else
        {
            s++;
            e--;
        }
    }
    return 1;
}
void reversename(char name[],int n)
{
    int s=0;
    int e=n-1;
    while(s<=e)
    {
        swap(name[s++],name[e--]);
    }
}

int getLength(char name[])
{
    int count=0;
    for(int i=0;name[i]!=0;i++)
    {
        count++;
    }
    return count;
}

char getmaxchar(string s)
{
    int arr[26] = {0};

    // create an array of count of characters
    for(int i=0;i<s.length();i++)
    {
        char ch = s[i];
        int number = 0;
        //lowercase
        if(ch>='a' && ch<='z')
        {
            number = ch - 'a'; 
        }
        //uppercase
        else
        {
            number = ch + 'A';
        }
        arr[number]++;
    }
    int maxi=-1,ans=0;
    for(int i=0;i<26;i++)
    {
        if(maxi<arr[i])
        {
            ans = i;
            maxi = arr[i];
        }
        maxi = max(maxi,arr[i]);
    }
    char finalans = 'a' + ans;
    return finalans;
}

int main()
{
    // char name[20];

    // cout << "Enter your name: " ;
    // cin >> name;

    // cout << "Your name is: ";
    // cout << name << endl;

    // int result;
    // result = getLength(name);
    // cout << "Length is: " << result << endl;

    // reversename(name,result);
    // cout << "Your name is: ";
    // cout << name << endl;

    // cout << "Palindrome or not:" << checkPalindrome(name,result);
    // cout << "Character is" << toLowercase('b') << endl;
    // cout << "Character is" << toLowercase('C') << endl;

    string s;
    cin >> s;
    cout << getmaxchar(s);
    
}