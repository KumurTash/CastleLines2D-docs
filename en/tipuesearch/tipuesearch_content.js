var tipuesearch = {"pages": [
     {"title": "introduction", "text": "Castle Lines 2D is a set of two components for Castle Game Engine.  Castle Lines 2D makes it possible to create geometry from polygons directly in the CGE editor.  Castle Lines 2D consists of classes inherited from TCastleAbstractPrimitive:  TCastleLine2D - polyline.  TCastlePolygon2D - potentially non-convex polygon.  To enter the editing mode, use the drop-down menus in the object hierarchy window  Left mouse button - add a point, move a point.  Right mouse button - delete a point.  Middle mouse button - open a window for editing a point.      code {     background-color: #f0f0f0;     font-family: monospace !important;     padding: 2px 4px;     font-size: 90%;     color: #c7254e;     border-radius: 4px }  pre {     white-space: pre-wrap;     display: block;     padding: 9.5px;     margin: 0 0 10px;     font-size: 13px;     line-height: 1.42857143;     color: #333;     word-break: break-all;     word-wrap: break-word;     background-color: #f5f5f5;     border: 1px solid #ccc;     border-radius: 4px;     overflow: auto; } ol {     display: block;     list-style-type: decimal;     margin-block-start: 1em;     margin-block-end: 1em;     margin-inline-start: 0px;     margin-inline-end: 0px;     padding-inline-start: 40px; } li {     display: list-item;     text-align: -webkit-match-parent;     line-height: 1.5; }    Detailed usage instructions:               Get CastleLine2D code.                          Point your project to TCastleLine2D sources.       E.g. add this to CastleEngineManifest.xml:                       &lt;compiler_options&gt;           &lt;search_paths&gt;             &lt;path value=\"code/\" /&gt;             &lt;path value=\"../../../CastleLines2D/src/\" /&gt;           &lt;/search_paths&gt;         &lt;/compiler_options&gt;                            Add to CastleEngineManifest.xml the line editor_units=\"CastleLine2D,CastlePolygon2D\".         See CastleEngineManifest.xml docs for examples.                   Open your project in CGE editor and use “Project -> Restart Editor (With Custom Components)”                    In Lazarus don't forget to add the source path to “Project Options -> Compiler Options -> Paths -> Other unit files”                    Be sure to also add CastleLine2D, CastlePolygon2D  to some uses clause, to register components at runtime.          Examples For examples, see /CastleLines2D/examples         Change log  12.01.2023:  Added various ways to apply texture to TCastleLine2D, TCastlePolygon2D.  The Shift key now helps to draw straight lines.  In CastlePolygon2D added property TCastlePolygon2D.Area  Bugs fixed.  More details  TCastleLine2D  An object of type TIndexedTriangleSetNode is now used as geometry  Changed type CastleLine2D.TBeginEndMode  Added type CastleLine2D.TLineTexCoordMode  Added type CastleLine2D.TJoinTexCoordMode  Added property TCastleLine2D.TexCoordMode  Added property TCastleLine2D.JoinTexCoordMode   To the section protected added  Variables TCastleLine2D.FTexY, TCastleLine2D.FTexX  Method TCastleLine2D.AddGeometryBeginEnd  Method TCastleLine2D.SetTexCoordMode  TCastlePolygon2D  An object of type TIndexedTriangleSetNode is now used as geometry  Added type CastlePolygon2D.TPolygonTexCoordMode  Added property TCastlePolygon2D.Area  Added property TCastlePolygon2D.TextureScale  Added property TCastlePolygon2D.TexCoordMode  Added method TCastlePolygon2D.CalculateAreaWithoutDisplay  TCastleLine2DBase.SelfIntersections moved to TCastleLine2DBase  CastleLine2DMath  Added CastleLine2DMath.AddBox  Added CastleLine2DMath.AddTriangleTop  Added CastleLine2DMath.AddRoundBoxTop   CastleLine2DMath.DoGoodTriangle is now a function  CastleLine2DMath.AddArcBetweenPoints is now a function  CastleLine2DMath.AddCrossSegments is now a function  CastleLine2DMath.AddRect - the order of traversing the rectangle has been changed  Introduction", "tags": "", "url": "introduction.html"},
     {"title": "CastleLine2D", "text": "TCastleLine2D   ", "tags": "", "url": "CastleLine2D.html"},
     {"title": "CastleLine2D.TCastleLine2D", "text": "A polyline consists of rectangles. Has different connection methods for rectangles, various options for the beginning and end of the line.  To enter edit mode, use &quot;verb&quot; (Edit mode ON) - right-click on the object in the object hierarchy window.   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html"},
     {"title": "CastleLine2D.TCastleLine2D.FTexY", "text": "Coefficient for correct texture mapping. Determines which part of the texture along the Y axis should be used. When TexCoordMode=cmLine is 1. When TexCoordMode=cmBeginEndLine is 0.5   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#FTexY"},
     {"title": "CastleLine2D.TCastleLine2D.FTexX", "text": "X-axis coefficient for correct texture mapping. Usually equal to (Texture height)/(Line width*Texture width)   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#FTexX"},
     {"title": "CastleLine2D.TCastleLine2D.ChangedTransform", "text": "    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#ChangedTransform"},
     {"title": "CastleLine2D.TCastleLine2D.AddGeometryBeginEnd", "text": "Add the geometry of the beginning and end of the line. A,B - the segment where the geometry is attached.  Opposite - the geometry will be built in the opposite direction from this point.  GList - you need to add geometry here.  BeginOrEnd - pointer to TCastleLine2D.JoinBeginMode or to TCastleLine2D.JoinEndMode.  Inherited classes should override the method if a new geometry needs to be added.    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#AddGeometryBeginEnd"},
     {"title": "CastleLine2D.TCastleLine2D.SetTexCoordMode", "text": "Sets the TCastleLine2D.TexCoordMode and TCastleLine2D.FTexY and TCastleLine2D.FTexX.    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#SetTexCoordMode"},
     {"title": "CastleLine2D.TCastleLine2D.Create", "text": "When created in the CGE editor, creates a line of two points. When creating directly in the code (RunTime), points are not added.    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#Create"},
     {"title": "CastleLine2D.TCastleLine2D.Destroy", "text": "    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#Destroy"},
     {"title": "CastleLine2D.TCastleLine2D.ReLoad", "text": "    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#ReLoad"},
     {"title": "CastleLine2D.TCastleLine2D.PropertySections", "text": "    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#PropertySections"},
     {"title": "CastleLine2D.TCastleLine2D.JoinMode", "text": "Connection type for rectangles in a line   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#JoinMode"},
     {"title": "CastleLine2D.TCastleLine2D.JoinRoundPrecision", "text": "The number of segments in the circle sector when JoinMode=jmRound   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#JoinRoundPrecision"},
     {"title": "CastleLine2D.TCastleLine2D.JoinSharpLimitRad", "text": "With this or a smaller angle between the lines, an acute angle is not built. Used when JoinMode=jmSharp   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#JoinSharpLimitRad"},
     {"title": "CastleLine2D.TCastleLine2D.JoinBeginMode", "text": "The type of the beginning of the line   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#JoinBeginMode"},
     {"title": "CastleLine2D.TCastleLine2D.JoinEndMode", "text": "The type of the end of the line   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#JoinEndMode"},
     {"title": "CastleLine2D.TCastleLine2D.LineWidth", "text": "Line width   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#LineWidth"},
     {"title": "CastleLine2D.TCastleLine2D.TexCoordMode", "text": "Method for calculating texture coordinates.  With cmDefault, texture coordinates are set by CGE methods.  With cmLine the line repeats the texture as it lengthens. The texture can be any.  With cmBeginEndLine, different areas of the texture are used for the beginning and end. The texture must be specially prepared.  Examples of textures for cmBeginEndLine:  or  or    ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#TexCoordMode"},
     {"title": "CastleLine2D.TCastleLine2D.JoinTexCoordMode", "text": "The method for calculating texture coordinates on line bends. When JoinMode=jmSharp is not used.   ", "tags": "", "url": "CastleLine2D.TCastleLine2D.html#JoinTexCoordMode"},
     {"title": "CastleLine2D.TLineTexCoordMode", "text": "Type for determining how texture coordinates are calculated.    cmDefault  Texture coordinates are considered CGE methods  cmLine  Entire height of the texture is used  cmBeginEndLine  Allows you to use different areas of the texture for the beginning and the end. Read more TCastleLine2D.TexCoordMode ", "tags": "", "url": "CastleLine2D.html#TLineTexCoordMode"},
     {"title": "CastleLine2D.TJoinMode", "text": "Connection type for rectangles in a line    jmBevel  Beveled edges  jmRound  Rounded edges  jmSharp  Sharp edges ", "tags": "", "url": "CastleLine2D.html#TJoinMode"},
     {"title": "CastleLine2D.TBeginEndMode", "text": "The type of the beginning and end of the line    bmNone    bmRound  Semicircle  bmTopRound  Rounded square on top  bmBottomRound  Rounded square on bottom  bmTriangle  Triangle  bmTopTriangle  Triangle with hypotenuse on top  bmBottomTriangle  Triangle with hypotenuse on bottom  bmHalfBox  Half a square  bmBox  Square ", "tags": "", "url": "CastleLine2D.html#TBeginEndMode"},
     {"title": "CastleLine2D.PBeginEndMode", "text": "   ", "tags": "", "url": "CastleLine2D.html#PBeginEndMode"},
     {"title": "CastleLine2D.TJoinTexCoordMode", "text": "The method of applying texture to the bends of a line    jcmStretch  Stretch texture  jcmCrop  Crop texture ", "tags": "", "url": "CastleLine2D.html#TJoinTexCoordMode"},
     {"title": "CastleLine2DBase", "text": "TCastleLine2DBase   ", "tags": "", "url": "CastleLine2DBase.html"},
     {"title": "CastleLine2DBase.TCastleLine2DBase", "text": "Base class for shapes that are defined by a set of vertices Points. Inherited classes should override the ReLoad method.) A property editor is provided for the Points vertex set It is also possible to edit a set of vertices from the CGE editor window. To enter edit mode, use &quot;verb&quot; (Edit mode ON) - right-click on the object in the object hierarchy window.   ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.SetLineType", "text": "    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#SetLineType"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.Clear", "text": "Delete all points    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#Clear"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.CustomSerialization", "text": "    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#CustomSerialization"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.ReLoad", "text": "Build geometry again. Inherited classes should override this method    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#ReLoad"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.SavePointsToFile", "text": "Save points Points to a file    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#SavePointsToFile"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.LoadPointsFromFile", "text": "Load points Points from a file    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#LoadPointsFromFile"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.SelfIntersections", "text": "Checking for self-intersection.    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#SelfIntersections"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.Create", "text": "    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#Create"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.Destroy", "text": "    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#Destroy"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.PropertySections", "text": "    ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#PropertySections"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.EditMode", "text": "Is editing mode enabled   ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#EditMode"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.LineType", "text": "Line type (open line, closed line)   ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#LineType"},
     {"title": "CastleLine2DBase.TCastleLine2DBase.Points", "text": "Points (vertices). Inherited classes should build geometry based on them   ", "tags": "", "url": "CastleLine2DBase.TCastleLine2DBase.html#Points"},
     {"title": "CastleLine2DBase.TCastleLineType", "text": "Line type    ltOpen  Open line  ltClose  Closed line ", "tags": "", "url": "CastleLine2DBase.html#TCastleLineType"},
     {"title": "CastleLine2DGizmos", "text": "TCastleLine2DGizmos, Line2DGizmos   ", "tags": "", "url": "CastleLine2DGizmos.html"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos", "text": "Geometry for editing descendants of TCastleLine2DBase in the CGE  editor Left mouse button - to double the point, move the point  Right mouse button - delete the point  Middle mouse button - open a window to edit the point  To enter edit mode, use &quot;verb&quot; (Edit mode ON) - right-click on the object in the object hierarchy window.   ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.LocalRayCollision", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#LocalRayCollision"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.PointingDeviceMove", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#PointingDeviceMove"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.PointingDevicePress", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#PointingDevicePress"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.PointingDeviceRelease", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#PointingDeviceRelease"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.Press", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#Press"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.Release", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#Release"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.Create", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#Create"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.Destroy", "text": "    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#Destroy"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.ReLoad", "text": "Build geometry again.    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#ReLoad"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.Hide", "text": "Hide the object. Exit Editing mode    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#Hide"},
     {"title": "CastleLine2DGizmos.TCastleLine2DGizmos.Show", "text": "Show the object. Enter Editing mode    ", "tags": "", "url": "CastleLine2DGizmos.TCastleLine2DGizmos.html#Show"},
     {"title": "CastleLine2DGizmos.DISTANCE_SELECTED_POINT", "text": "Distance to the point where the point is highlighted. Depends on the current height of the camera   ", "tags": "", "url": "CastleLine2DGizmos.html#DISTANCE_SELECTED_POINT"},
     {"title": "CastleLine2DGizmos.DISTANCE_INSERT_POINT", "text": "The distance to the point at which the point is inserted on the line. Depends on the current height of the camera   ", "tags": "", "url": "CastleLine2DGizmos.html#DISTANCE_INSERT_POINT"},
     {"title": "CastleLine2DGizmos.TEXT_SCALE", "text": "Text Scale. Depends on the current height of the camera   ", "tags": "", "url": "CastleLine2DGizmos.html#TEXT_SCALE"},
     {"title": "CastleLine2DGizmos.FONT_SIZE", "text": "Font size   ", "tags": "", "url": "CastleLine2DGizmos.html#FONT_SIZE"},
     {"title": "CastleLine2DGizmos.LINE_WIDTH_EDITOR", "text": "Line width to edit   ", "tags": "", "url": "CastleLine2DGizmos.html#LINE_WIDTH_EDITOR"},
     {"title": "CastleLine2DGizmos.POINT_SIZE", "text": "Vertex point size   ", "tags": "", "url": "CastleLine2DGizmos.html#POINT_SIZE"},
     {"title": "CastleLine2DGizmos.BORDER_DISTANCE", "text": "Distance to the border. Depends on the current height of the camera   ", "tags": "", "url": "CastleLine2DGizmos.html#BORDER_DISTANCE"},
     {"title": "CastleLine2DGizmos.Line2DGizmos", "text": "This object is used to edit all classes inherited from TCastleLine2DBase in the CGE editor. When entering edit mode, a new parent is assigned to this object by the Show(ALine:TCastleLine2DBase) method.   ", "tags": "", "url": "CastleLine2DGizmos.html#Line2DGizmos"},
     {"title": "CastleLine2DMath", "text": "The module contains some mathematical methods, as well as methods for constructing some primitives.   ", "tags": "", "url": "CastleLine2DMath.html"},
     {"title": "CastleLine2DMath.DoFloat", "text": "Converts StringValue to a number by removing the excess. Remain is a non-removable remainder in a string (can be used to ensure that the '-' at the beginning of the line is not deleted)    ", "tags": "", "url": "CastleLine2DMath.html#DoFloat"},
     {"title": "CastleLine2DMath.PSDistanceEx", "text": "The minimum distance from the point(P) to the segment(SP1:SP2) with the calculation of the projection point (PP) on the segment. 0 - the point is projected onto the segment: Distance = distance from P to the segment SP1,SP2. PP  1 - point P lies &quot;to left&quot; of SP1: Distance = distance from P to SP1. PP=SP1  2 - point P lies &quot;to right&quot; of SP2: Distance = distance from P to SP2. PP=SP2    ", "tags": "", "url": "CastleLine2DMath.html#PSDistanceEx"},
     {"title": "CastleLine2DMath.CrossingSegments", "text": "Intersection of segments A1:A2, B1:B2  1 if there is one intersection point &quot;CrossPoint&quot;  0 if chunks ar on parallel lines  -1 if there are no intersection points    ", "tags": "", "url": "CastleLine2DMath.html#CrossingSegments"},
     {"title": "CastleLine2DMath.IsClockwiseTriangle", "text": "If the order of traversal of triangle A,B,C is clockwise, then returns True    ", "tags": "", "url": "CastleLine2DMath.html#IsClockwiseTriangle"},
     {"title": "CastleLine2DMath.AddArcBetweenPoints", "text": "Builds an arc between points A,B with the center at the point Center  O - the point of connection of the segments (may coincide with the Center)  EdgesCount - number of segments  The resulting triangles are added to Arc  Result = arc length    ", "tags": "", "url": "CastleLine2DMath.html#AddArcBetweenPoints"},
     {"title": "CastleLine2DMath.AddRoundBoxTop", "text": "Builds a square with one corner rounded on the segment A:B in the direction opposite to the Opposite. EdgesCount - the number of arc segments. Result = arc length.    ", "tags": "", "url": "CastleLine2DMath.html#AddRoundBoxTop"},
     {"title": "CastleLine2DMath.AddHalfCircle", "text": "Builds a semicircle on the segment A:B in the opposite direction Opposite  EdgesCount - number of segments  The resulting triangles are added to Arc    ", "tags": "", "url": "CastleLine2DMath.html#AddHalfCircle"},
     {"title": "CastleLine2DMath.AddTriangle", "text": "Adds a triangle to the Arc    ", "tags": "", "url": "CastleLine2DMath.html#AddTriangle"},
     {"title": "CastleLine2DMath.AddTriangleOpposite", "text": "Builds a rectangular isosceles triangle on the segment A:B in the opposite direction Opposite. Hypotenuse - A:B    ", "tags": "", "url": "CastleLine2DMath.html#AddTriangleOpposite"},
     {"title": "CastleLine2DMath.AddTriangleTop", "text": "Builds a rectangular isosceles triangle on the segment A:B in the direction opposite to the Opposite. Hypotenuse - A:New Point    ", "tags": "", "url": "CastleLine2DMath.html#AddTriangleTop"},
     {"title": "CastleLine2DMath.AddHalfBox", "text": "Builds a half square on the segment A:B in the opposite direction Opposite    ", "tags": "", "url": "CastleLine2DMath.html#AddHalfBox"},
     {"title": "CastleLine2DMath.AddBox", "text": "Builds a square on the segment A:B in the opposite direction of the Opposite.    ", "tags": "", "url": "CastleLine2DMath.html#AddBox"},
     {"title": "CastleLine2DMath.AddRect", "text": "Builds a rectangle whose axis of symmetry is the segment A:B.  Creates 0..5 points 4 point equals 0 point. 5 point equals 2 point  If A.X&lt;B.X, the zero point is the lower left  If A.X&gt;B.X, the zero point is the upper right  If A.X=B.X and A.Y&lt;B.Y the zero point is the lower right  If A.X=B.X and A.Y&gt;B.Y, the zero point is the upper left  Traversing the rectangle clockwise  width - height of the rectangle    ", "tags": "", "url": "CastleLine2DMath.html#AddRect"},
     {"title": "CastleLine2DMath.AddCrossSegments", "text": "Adds triangles to connect two segments at the intersection point outside of these segments. A1:A2 the first segment. B1:B2 is the second segment. O is the junction point of the triangles.  As a result, construct triangles (O,A2,cross) and (O,B2,cross).  Result = length of the constructed segments    ", "tags": "", "url": "CastleLine2DMath.html#AddCrossSegments"},
     {"title": "CastleLine2DMath.DoGoodTriangle", "text": "Sorts the vertices of the triangle in clockwise traversal order depending on the &quot;Scale&quot; (in the 2nd and 4th quarters, the order of traversal changes). If changes have been made (B and C have been swapped), it will return true.    ", "tags": "", "url": "CastleLine2DMath.html#DoGoodTriangle"},
     {"title": "CastlePolygon2D", "text": "TCastlePolygon2D   ", "tags": "", "url": "CastlePolygon2D.html"},
     {"title": "CastlePolygon2D.TCastlePolygon2D", "text": "A potentially non-convex polygon. It is constructed from a set of vertices using the triangulation method.  To enter edit mode, use &quot;verb&quot; (Edit mode ON) - right-click on the object in the object hierarchy window.   ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.ChangedTransform", "text": "    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#ChangedTransform"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.SetLineType", "text": "The line type is always ltClose    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#SetLineType"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.CalculateAreaWithoutDisplay", "text": "    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#CalculateAreaWithoutDisplay"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.ReLoadoverride", "text": "    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#ReLoadoverride"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.Create", "text": "    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#Create"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.Destroy", "text": "    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#Destroy"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.Clear", "text": "    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#Clear"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.PropertySections", "text": "    ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#PropertySections"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.Area", "text": "The area of the polygon is calculated in CastlePolygon2D.Reload. If the polygon does not need to be displayed, then the area can be calculated using the UNKNOWN If self-intersection is detected, then the area is 0.   ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#Area"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.TextureScale", "text": "The parameter affects the texture magnification when TexCoordMode=cm Repeat. The smaller it is, the bigger the texture.   ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#TextureScale"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.TextureScalePersistent", "text": "TCastlePolygon2D.TextureScale   ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#TextureScalePersistent"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.TexCoordMode", "text": "Method for calculating texture coordinates   ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#TexCoordMode"},
     {"title": "CastlePolygon2D.TCastlePolygon2D.LineType", "text": "   ", "tags": "", "url": "CastlePolygon2D.TCastlePolygon2D.html#LineType"},
     {"title": "CastlePolygon2D.TPolygonTexCoordMode", "text": "Type for determining how texture coordinates are calculated.    cmDefault  Texture coordinates are considered CGE methods  cmRepeat  Repeating texture ", "tags": "", "url": "CastlePolygon2D.html#TPolygonTexCoordMode"},
     {"title": "UPointEditor", "text": "TPointEditor   ", "tags": "", "url": "UPointEditor.html"},
     {"title": "UPointEditor.TPointEditor", "text": "A class for an editing window for a single point (vertex) TCastleLine2DBase.Points[i] from the CGE editor. The window for editing is called by clicking the middle mouse button on the selected point in the JCE editor.   ", "tags": "", "url": "UPointEditor.TPointEditor.html"},
     {"title": "UPointEditor.TPointEditor.Create", "text": "    ", "tags": "", "url": "UPointEditor.TPointEditor.html#Create"},
     {"title": "UPointEditor.TPointEditor.Destroy", "text": "    ", "tags": "", "url": "UPointEditor.TPointEditor.html#Destroy"},
     {"title": "UPointEditor.TPointEditor.ShowModal", "text": "Open a window for editing points. index - to display the point number. vector - point (vertex).    ", "tags": "", "url": "UPointEditor.TPointEditor.html#ShowModal"},
     {"title": "UPointEditor.TPointEditor.ResultVector", "text": "The point (vertex) obtained as a result of editing   ", "tags": "", "url": "UPointEditor.TPointEditor.html#ResultVector"},
     {"title": "UPointEditor.TPointEditor.Execute", "text": "Result of calling the window for editing   ", "tags": "", "url": "UPointEditor.TPointEditor.html#Execute"},
     {"title": "UPointEditor.TPointEditorResult", "text": "Result of calling a point editing window    peCancel  the &quot;Cancel&quot; button is pressed  peDelete  the &quot;Delete&quot; button is pressed  peSave  the &quot;Save&quot; button is pressed ", "tags": "", "url": "UPointEditor.html#TPointEditorResult"},
     {"title": "UPointsEditor", "text": "TPointsEditor   ", "tags": "", "url": "UPointsEditor.html"},
     {"title": "UPointsEditor.TStringGridWithOnPasteFromClipboard", "text": "This class augmented with an event that fires after pasting from the clipboard. Used in TPointsEditor   ", "tags": "", "url": "UPointsEditor.TStringGridWithOnPasteFromClipboard.html"},
     {"title": "UPointsEditor.TStringGridWithOnPasteFromClipboard.DoPasteFromClipboard", "text": "    ", "tags": "", "url": "UPointsEditor.TStringGridWithOnPasteFromClipboard.html#DoPasteFromClipboard"},
     {"title": "UPointsEditor.TStringGridWithOnPasteFromClipboard.OnPasteFromClipboard", "text": "The event is called after pasting from the clipboard   ", "tags": "", "url": "UPointsEditor.TStringGridWithOnPasteFromClipboard.html#OnPasteFromClipboard"},
     {"title": "UPointsEditor.TPointsEditor", "text": "The class contains methods for creating and calling a window for editing a set of points (vertices) TCastleLine2DBase.Points in the object inspector.   ", "tags": "", "url": "UPointsEditor.TPointsEditor.html"},
     {"title": "UPointsEditor.TPointsEditor.Create", "text": "    ", "tags": "", "url": "UPointsEditor.TPointsEditor.html#Create"},
     {"title": "UPointsEditor.TPointsEditor.Destroy", "text": "    ", "tags": "", "url": "UPointsEditor.TPointsEditor.html#Destroy"},
     {"title": "UPointsEditor.TPointsEditor.ShowModal", "text": "Open a window for editing points    ", "tags": "", "url": "UPointsEditor.TPointsEditor.html#ShowModal"},
     {"title": "UPointsEditor.TPointsEditor.ReLoad", "text": "Reload the table    ", "tags": "", "url": "UPointsEditor.TPointsEditor.html#ReLoad"}
]};
