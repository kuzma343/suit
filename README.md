# suit


procedure TForm1.Button1Click(Sender: TObject);

var

NumCircles, i: Integer;

X, Y, Radius: Integer;

begin

// Отримуємо кількість кола з Edit1

NumCircles := StrToInt(Edit1.Text);



// Створюємо нове зображення

Image1.Picture := TPicture.Create;



// Встановлюємо розмір зображення

Image1.Picture.Bitmap.Width := Image1.Width;

Image1.Picture.Bitmap.Height := Image1.Height;



// Заповнюємо зображення білим кольором


Image1.Canvas.Brush.Color := clWhite;

Image1.Canvas.FillRect(Rect(0, 0, Image1.Width, Image1.Height));


// Встановлюємо випадкові координати та радіус для кожного кола

Randomize;

for i := 1 to NumCircles do

begin

X := Random(Image1.Width);

Y := Random(Image1.Height);

Radius := Random(50) + 10;



// Малюємо коло на зображенні



Image1.Canvas.Pen.Color := RGB(Random(255), Random(255), Random(255));

Image1.Canvas.Brush.Style := bsClear;


Image1.Canvas.Ellipse(X - Radius, Y - Radius, X + Radius, Y + Radius);

end;

end;
