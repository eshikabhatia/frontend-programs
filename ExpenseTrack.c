#include<stdio.h>
#include<string.h>
int amount;
int n=0;
int arr[100];
char ch[20];
char catego[20];
char category[100][20];
char cateo[20];
void addExpense(){
    printf("enter category:");
    getchar();
    fgets(catego,20,stdin);
     catego[strlen(catego)-1] = '\0';
    strcpy(category[n],catego);

     printf("enter amount:  ");
    scanf("%d",&amount);
    printf("added amount\n");
    arr[n]=amount;
    n++;
}
void viewExpense(){
    if(n==0){
        printf("No Expenses added");
        return;
    }

    for(int i=0;i<n;i++){
        printf("%d %s %d\n",i+1,category[i],arr[i]);
    }

}
void searchTotal(){
     if(n==0){
        printf("No Expenses added");
        return;
    }
    int flag=0;
  printf("enter the category:");
scanf("%s",cateo);
for(int i=0;i<n;i++){
    if(strcmp(cateo,category[i])==0){
            flag=1;
        printf("%s : %d",category[i],arr[i]);

    }
}
if(flag==0){
     printf("category not found");
}

}
void categoryTotal(){
     if(n==0){
        printf("No Expenses added");
        return;
    }
printf("enter the category:");
scanf("%s",cateo);
int sum=0;
for(int i=0;i<n;i++){
    if(strcmp(cateo,category[i])==0){
        sum+=arr[i];
    }
}
printf("%s total is: %d",cateo,sum);

}
void deleteExpense(){

int num;
    printf("enter the expense number you want to delete:");
    scanf("%d",&num);
if(n==0){
        printf("No Expenses added");
        return;
    }

    if(num>=n || num<0){
        return;
    }
    for(int i=num-1;i<n-1;i++){
        arr[i]=arr[i+1];
        strcpy(category[i],category[i+1]);
    }

n--;
}
void  highestExpense(){
     if(n==0){
        printf("No Expenses added");
        return;
    }
int max=arr[0];
int count=0;
for(int i=0;i<n;i++){
    if(arr[i]>max){
        max=arr[i];
        count=i;
    }
}
printf("highest expense is %s :%d",category[count],arr[count]);
}
void checkBudget(){
    int sum=0;
    printf("enter your Budget:");
    scanf("%d",&amount);
    for(int i=0;i<n;i++){
        sum+=arr[i];
}
if(sum<=amount){
    printf("Budget:%d\n",amount);
    printf("Spent:%d\n",sum);
    printf("Remaining:%d\n",(amount-sum));
}
else{
    printf("Spent:%d\n",sum);
    printf("Warning you have exceded your budget by %d\n",(sum-amount));
}
}
void updateExpense(){
int num;
printf("enter the expense you want to be updated:");
scanf("%d",&num);
printf("enter category:");
scanf("%s",&cateo);
strcpy(category[num-1],cateo);
printf("enter amount:");
scanf("%d",&amount);
arr[num-1]=amount;
}
int main(){
    int choice=0;
while(choice!=9){
    printf("1.Add Expense\n");
    printf("2.View Expense\n");
    printf("3.Search Expense\n");
    printf("4.Category wise Total\n");
    printf("5.Delete Expense\n");
    printf("6.Highest expense\n");
    printf("7.Budget check\n");
    printf("8.Update Expense\n");
    printf("9.Exit\n");
    printf("Enter choice:\n");

    scanf("%d",&choice);

        switch(choice){
        case 1:printf("adding expense\n");
        addExpense();
        break;
        case 2:printf("Viewing expense\n");
        viewExpense();
        break;
        case 3:printf("Search Expense\n");
        searchTotal();
        break;
        case 4:printf("Category wise Totaling\n");
        categoryTotal();
        break;
        case 5:printf("Delete Expense\n");
        deleteExpense();
        break;
        case 6:printf("Highest expense\n");
        highestExpense();
        break;
        case 7:printf("budget check\n");
        checkBudget();
        break;
        case 8:printf("Update expense\n");
        updateExpense();
        break;
        case 9:printf("Exiting\n");
        break;
    }
}
return 0;
}
