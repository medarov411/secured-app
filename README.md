# secured-app
# Защищенная версия приложения

### Инструкция по сборке и запуску приложения

> - git clone "текущий репозиторий"
> - cd app
> - pip install -r requirements.txt
> - python __init__.py
> - flask приложение будет запущено по адресу http://127.0.0.1:8089

![image](https://github.com/medarov411/vuln-app/assets/60567375/302c807a-5503-411e-a291-bbe552f247ec)

### Комментарии к исправлениям
>SSTI,XSS FIX:

>file: __init__.py Line:14

> Сроки ограничены на реализацию поэтому максимально быстрым и тривиальным решением было дополнить существующий блеклист. Добавлено ")","(","'","attr","<",">",'"',"/",'`',"|"]. Помимо этого можно было сделать санитизацию путем использования модуля escape.
> ![image](https://github.com/medarov411/secured-app/assets/60567375/e3430112-554c-48fb-b002-978ebea08ce0)

<p>&nbsp;</p>

>Path Traversal:

>file: __init__.py Line:419

> Была переписана функция def view_file(). В новом варианте добавлено определение безопасной директории для загрузки файлов. Это позволяет установить директорию, в которой разрешено хранение файлов. Использование os.path.abspath и os.path.join для безопасного соединения путей.

> ![image](https://github.com/medarov411/secured-app/assets/60567375/4d99691c-5e16-43e9-9992-e3fa31186520)

<p>&nbsp;</p>

>OS Command Injection:

>file: __init__.py Line:401

> Была переписана функия def execute(). Для устранения уязвимости и обеспечения безопасности кода, был использован метод subprocess.run с передачей списка аргументов вместо строки. Это предотвратит автоматическое разбиение строки на отдельные слова, что может быть использовано для внедрения команд. Также добавлено использование shlex.quote для каждого аргумента, чтобы предотвратить проблемы с обработкой спецсимволов.

> ![image](https://github.com/medarov411/secured-app/assets/60567375/68fae5fd-2824-48d4-9496-68d5533c5e5b)

<p>&nbsp;</p>

>SQLI:

>file: __init__.py Line:449

>Изменения в функции loginAPI(). Вместо использования строки формата для вставки значений в запрос, были использованы вопросительные знаки ? в запросе и теперь передаются значения как кортеж в качестве аргумента для функции выполнения запроса. Это позволяет избежать SQL-инъекций, так как библиотека SQLite3 обрабатывает вставку значений в запрос безопасным образом.
![image](https://github.com/medarov411/secured-app/assets/60567375/c4275ff0-a3da-45ce-b043-68ae020f4732)

