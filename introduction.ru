@bold(@url(https://github.com/KumurTash/CastleLines2D Castle Lines 2D)) это набор из двух компонентов для @bold(@url(https://castle-engine.io/ Castle Game Engine)).

@bold(Castle Lines 2D) дает возможность создание геометрии из полигонов непосредственно в редакторе CGE.

@bold(Castle Lines 2D) состоит из потомков TCastleAbstractPrimitive:

@link(TCastleLine2D) - полилиния.

@link(TCastlePolygon2D) - потенциально невыпуклый многоугольник.

Для входа в режим редактирования используйте выпадающие меню в окне иерархии объектов.

@bold(Левая кнопка мыши) - добавить точку, переместить точку.

@bold(Правая кнопка мыши) - удалить точку.

@bold(Средняя кнопка мыши) - вызвать окно для редактирования точки.

@image(EditModeOn.gif)

@html(
<style type="text/css">
code {
    background-color: #f0f0f0;
    font-family: monospace !important;
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    border-radius: 4px
}

pre {
    white-space: pre-wrap;
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: auto;
}
ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    line-height: 1.5;
}
</style>


<h2>Инструкция по подключению компонентов:</h2>
<p>
<ol>
     <li>
      Скачайте код <a href=https://github.com/KumurTash/CastleLines2D>CastleLine2D</a>.
     </li>
     <li>
      <p>
      Укажите исходный код <code>TCastleLine2D</code> в параметрах вашего проекта.
      Например добавьте это в <code>CastleEngineManifest.xml:</code>
      </p>
      <pre>
        &lt;compiler_options&gt;
          &lt;search_paths&gt;
            &lt;path value="code/" /&gt;
            &lt;path value="../../../CastleLines2D/src/" /&gt;
          &lt;/search_paths&gt;
        &lt;/compiler_options&gt;
      </pre>
     </li>
     <li> <p>
       Также добавьте в <code>CastleEngineManifest.xml</code> строку <code>editor_units="CastleLine2D,CastlePolygon2D"</code>. </br>
       Смотрите подробную документацию <a href=https://castle-engine.io/project_manifest>CastleEngineManifest.xml</a>
     </p></li>
     <li><p>
      Откройте Ваш проект в редакторе CGE и используйте <i>“Project -> Restart Editor (With Custom Components)”</i>
     </p></li>
     <li><p>
       В Lasarus не забудьте добавить пусть до исходников в <i>“Параметры проекта -> Параметры компилятора -> Пути -> Другие модули”</i>
     </p></li>
     <li><p>
       Не забудьте также добавить <code>CastleLine2D, CastlePolygon2D </code> в <b>uses</b>, чтобы зарегистрировать компоненты во время выполнения.
     </p></li>

</ol>
</p>
<h2>Примеры</h2>
<p>Примеры использования компонентов смотрите в <i>/CastleLines2D/examples</i> </p>
)

@image(preview1.png) @image(preview2.png) @image(preview3.png) @image(preview4.png)

@html(<h2>Журнал изменений</h2><p><a name="change"></a></p>)

@bold(12.01.2023):

Добавлены различные способы наложения текстуры на @Link(TCastleLine2D), @Link(TCastlePolygon2D).

Клавиша Shift теперь помогает рисовать ровные линии.

В @Link(CastlePolygon2D) добавлено свойство @Link(TCastlePolygon2D.Area) - площадь многоугольника

Исправлены баги.

@html(<h3>Подробнее</h3>)

@bold(@Link(TCastleLine2D)) @br
В качестве геометрии теперь используется объект типа @bold(TIndexedTriangleSetNode)

Изменен тип @Link(CastleLine2D.TBeginEndMode) @br
Добавлен тип @Link(CastleLine2D.TLineTexCoordMode) @br
Добавлен тип @Link(CastleLine2D.TJoinTexCoordMode) @br
Добавлено свойство @Link(TCastleLine2D.TexCoordMode) @br
Добавлено свойство @Link(TCastleLine2D.JoinTexCoordMode) @br

В раздел @bold(protected) добавлено @br
Переменные @Link(TCastleLine2D.FTexY), @Link(TCastleLine2D.FTexX) @br
Метод @Link(TCastleLine2D.AddGeometryBeginEnd) @br
Метод @Link(TCastleLine2D.SetTexCoordMode)

@bold(@Link(TCastlePolygon2D)) @br
В качестве геометрии теперь используется объект типа @bold(TIndexedTriangleSetNode)

Добавлен тип @Link(CastlePolygon2D.TPolygonTexCoordMode) @br
Добавлено свойство @Link(TCastlePolygon2D.Area) @br
Добавлено свойство @Link(TCastlePolygon2D.TextureScale) @br
Добавлено свойство @Link(TCastlePolygon2D.TexCoordMode) @br
Добавлен метод @Link(TCastlePolygon2D.CalculateAreaWithoutDisplay) @br
@Link(TCastleLine2DBase.SelfIntersections) перенесен в @Link(TCastleLine2DBase)

@bold(@Link(CastleLine2DMath)) @br
Добавлено   @Link(CastleLine2DMath.AddBox) @br
Добавлено   @Link(CastleLine2DMath.AddTriangleTop) @br
Добавлено   @Link(CastleLine2DMath.AddRoundBoxTop) @br

@Link(CastleLine2DMath.DoGoodTriangle) теперь функция @br
@Link(CastleLine2DMath.AddArcBetweenPoints) теперь функция @br
@Link(CastleLine2DMath.AddCrossSegments) теперь функция @br
@Link(CastleLine2DMath.AddRect) - изменен порядок обхода прямоугольника

















