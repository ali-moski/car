<?php

// اطلاعات دیتابیس برای اتصال

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
//این خط کد اتصال را به پایگاه داده ایجاد میکند ....

//$conn یک متغیر است که برای اتصال به پایگاه داده استفاده می‌شود....

//new به معنای یک اتصال جدید به پایگاه داده است....

//servername نشان دهنده نام سرور است....

//username  نام پیگاه داده رو نشون میده ....

//password رمز ورود به پایگاه داده است....

//dbname نام دیتابیس را نشان میدهد....

$conn = new mysqli($servername, $username, $password, $dbname);

// این خط میگوید که اگر اتصال به دیتابیس ایجاد نشد یک پیغام خطا ایجاد میکند
// اینجا میگه که اگه اتصال به دیتابیس با اون مقدارید بالا امکان ناپذیر بود خطا رو چاپ کن
if ($conn->connect_error) {
  die("اتصال امکان پذیر نیست: " . $conn->connect_error);
}

//این ها نام فیلد های موجود در فرم است
//و دیتابیس است

$username = $_POST["username"];
$name = $_POST["name"];
$family = $_POST["family"];
$email = $_POST["email"];
$password = $_POST["password"];
$password_confirm = $_POST["password_confirm"];

// بررسی تکراری بودن نام کاربری

//این خط کد سلکت میکنه آی دی رو و از جدول یوزرز به شرطی که یوزرنام برابر باشه با متغیر یوزر نام

$sql = "SELECT id FROM users WHERE username='$username'";

//چیزی که من فهمیدم اینکه متغیر 

//result اطلاعات رو در دیتابیس ذخیره میکند

//متغیر coon به دیتابیس 

//query میزند یا همان جستجو میکند و کد بالایی که نوشتیم را اجرا میکند

$result = $conn->query($sql);

//$result وقتی یک چیزی رو در خود ذخیره میکند اون مقدار را نگه میدارد

// دقیقا داره میگه که تمام فیلد ها رو بررسی میکنه متغیر ریزالت اون مقدارش که داخل جدول ذخیره شد بود رو میزاریم بعد از دستور بعدی استفاده میکنیم که 

// بیاد تمام رکورد های یک جدول رو ببینه و اگه چیزی بود که مقدارش بزرگتر از 0 بود اون پیغام خطا رو نمایش میده

// exit() کار این هم اینکه اجرای کار رو متوقف میکنه البته اگه کد اشتباه باشه اینکار رو انجام میده

if ($result->num_rows > 0) {
  echo "نام کاربری تکراری است.";
  exit();
}

// بررسی مطابقت رمز عبور با تکرار رمز عبور

// != این علامت به معنای برابر نیست است

// اگر مقدار ها برابر نبود خطا را چاپ میکند و اگر غیر این بود کهکد را تا انتها اجرا میکند

// در کد مقدار هرو رو مشاهده میکند اگر برابر نبودند پیغام را نمایش میدهد


if ($password != $password_confirm) {
  echo "رمز عبور با تکرار رمز عبور مطابقت ندارد.";
  exit();
}

// بررسی ساختار ایمیل

// !preg_match در کد زیر این تابع وظیفه این را دارد که یک متن یا همان رشته را با یک الگو مطابقت دهد

// در کل ساختار را چک میکند...

// در کل این کد دارد ساختار ایمیل را چک میند

// در کد زیر ما میگوییم از حروف استفاده میتوان کرد و هم از عدد

//@gmail.com و حتما باید با

//تمام شود یعنی یا @gmail.com 

//جمع شود...

if (!preg_match("/^[a-zA-Z0-9_.+-]+@gmail.com$/", $email)) {
  echo "ایمیل با ساختار صحیح نیست.";
  exit();
}

// ذخیره اطلاعات در دیتابیس

// این کد هم که دارد یک رکورد داخل جدول users

//ایجاد میکند...

$sql = "INSERT INTO users (username, name, family, email, password, password_confirm) VALUES ('$username', '$name', '$family', '$email', '$password', '$password_confirm')";

//چیزی که من فهمیدم اینکه متغیر 

//result اطلاعات رو در دیتابیس ذخیره میکند

//متغیر coon به دیتابیس 

//query میزند یا همان جستجو میکند و کد بالایی که نوشتیم را اجرا میکند

$result = $conn->query($sql);

//$result این هم میگوید که اگه مقدارید جمع شده در متغیر 

// به درستی بود یک پیغام ثبت نام موفقیت آمیز بود بده 

// در غیر این صورت پیغام خطا رو نمایش بده...

if ($result) {
  echo "ثبت نام با موفقیت انجام شد.";
} else {
  echo "خطایی در ثبت نام رخ داد.";
}

// این کد هم میگوید که اتصال با پایگاه داده رو ببند 

// تمام کار ها که انجام شد اتصال را با دیتابیس قطع میکند...

$conn->close();

?>
