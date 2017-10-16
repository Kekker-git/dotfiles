// GLSL shader autogenerated by cg2glsl.py.
#if defined(VERTEX)

#if __VERSION__ >= 130
#define COMPAT_VARYING out
#define COMPAT_ATTRIBUTE in
#define COMPAT_TEXTURE texture
#else
#define COMPAT_VARYING varying 
#define COMPAT_ATTRIBUTE attribute 
#define COMPAT_TEXTURE texture2D
#endif

#ifdef GL_ES
#define COMPAT_PRECISION mediump
#else
#define COMPAT_PRECISION
#endif
COMPAT_VARYING     float _frame_rotation;
struct input_dummy {
    vec2 _video_size;
    vec2 _texture_size;
    vec2 _output_dummy_size;
    float _frame_count;
    float _frame_direction;
    float _frame_rotation;
};
vec4 _oPosition1;
input_dummy _IN1;
vec4 _r0006;
COMPAT_ATTRIBUTE vec4 VertexCoord;
COMPAT_ATTRIBUTE vec4 COLOR;
COMPAT_VARYING vec4 COL0;
COMPAT_ATTRIBUTE vec4 TexCoord;
COMPAT_VARYING vec4 TEX0;
COMPAT_ATTRIBUTE vec4 LUTTexCoord;
COMPAT_VARYING vec4 TEX1;
 
uniform mat4 MVPMatrix;
uniform int FrameDirection;
uniform int FrameCount;
uniform COMPAT_PRECISION vec2 OutputSize;
uniform COMPAT_PRECISION vec2 TextureSize;
uniform COMPAT_PRECISION vec2 InputSize;
void main()
{
    vec4 _oColor;
    vec2 _oTex;
    vec2 _otex_border;
    vec2 _scale;
    vec2 _middle;
    vec2 _diff;
    vec2 _dist;
    _r0006 = VertexCoord.x*MVPMatrix[0];
    _r0006 = _r0006 + VertexCoord.y*MVPMatrix[1];
    _r0006 = _r0006 + VertexCoord.z*MVPMatrix[2];
    _r0006 = _r0006 + VertexCoord.w*MVPMatrix[3];
    _oPosition1 = _r0006;
    _oColor = COLOR;
    _scale = (OutputSize/vec2( 3.20000000E+02, 2.40000000E+02))/6.00000000E+00;
    _middle = (5.00000000E-01*InputSize)/TextureSize;
    _diff = TexCoord.xy - _middle;
    _oTex = _middle + _diff*_scale;
    _dist = LUTTexCoord.xy - vec2( 4.99989986E-01, 4.99989986E-01);
    _otex_border = vec2( 4.99989986E-01, 4.99989986E-01) + (_dist*OutputSize)/vec2( 2.56000000E+03, 1.44000000E+03);
    gl_Position = _r0006;
    COL0 = COLOR;
    TEX0.xy = _oTex;
    TEX1.xy = _otex_border;
} 
#elif defined(FRAGMENT)

#if __VERSION__ >= 130
#define COMPAT_VARYING in
#define COMPAT_TEXTURE texture
out vec4 FragColor;
#else
#define COMPAT_VARYING varying
#define FragColor gl_FragColor
#define COMPAT_TEXTURE texture2D
#endif

#ifdef GL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#define COMPAT_PRECISION mediump
#else
#define COMPAT_PRECISION
#endif
COMPAT_VARYING     float _frame_rotation;
struct input_dummy {
    vec2 _video_size;
    vec2 _texture_size;
    vec2 _output_dummy_size;
    float _frame_count1;
    float _frame_direction;
    float _frame_rotation;
};
vec4 _ret_0;
vec4 _TMP6;
vec2 _TMP5;
vec2 _TMP12;
float _TMP11;
float _TMP10;
vec3 _TMP4;
float _TMP9;
float _TMP8;
float _TMP7;
float _TMP3;
float _TMP2;
float _TMP1;
vec2 _TMP0;
uniform sampler2D Texture;
uniform sampler2D bg;
input_dummy _IN1;
vec2 _x0019;
float _a0025;
vec3 _x0027;
vec2 _x0035;
vec2 _x0041;
vec2 _x0043;
vec2 _TMP44;
COMPAT_VARYING vec4 TEX0;
COMPAT_VARYING vec4 TEX1;
 
uniform int FrameDirection;
uniform int FrameCount;
uniform COMPAT_PRECISION vec2 OutputSize;
uniform COMPAT_PRECISION vec2 TextureSize;
uniform COMPAT_PRECISION vec2 InputSize;
void main()
{
    vec2 _px;
    float _id;
    vec3 _co;
    vec2 _pa;
    vec4 _colorgrid;
    vec4 _frame;
    vec4 _background;
    vec3 _TMP17;
    _px = (1.00000000E+03*(-TextureSize.xy + 8.00000000E+00*(TEX0.xy*(TextureSize.xy/InputSize.xy)).xy))/TextureSize.y;
    _x0019 = _px + 5.00000000E-01;
    _TMP0 = floor(_x0019);
    _TMP1 = dot(_TMP0, vec2( 1.13099998E+02, 1.78099995E+01));
    _TMP2 = sin(_TMP1);
    _a0025 = float(FrameCount)*9.99999978E-03*4.00000000E+00 + _TMP2*4.37585469E+04;
    _TMP3 = cos(_a0025);
    _id = 5.00000000E-01 + 5.00000000E-01*_TMP3;
    _x0027 = (float(FrameCount)*9.99999978E-03 + 3.50000000E+00*_id) + vec3( 0.00000000E+00, 1.57000005E+00, 3.14000010E+00);
    _TMP7 = cos(_x0027.x);
    _TMP8 = cos(_x0027.y);
    _TMP9 = cos(_x0027.z);
    _TMP4 = vec3(_TMP7, _TMP8, _TMP9);
    _co = 5.00000000E-01 + 5.00000000E-01*_TMP4;
    _x0035 = 6.28310013E+00*_px;
    _TMP10 = cos(_x0035.x);
    _TMP11 = cos(_x0035.y);
    _TMP5 = vec2(_TMP10, _TMP11);
    _x0041 = _id*(5.00000000E-01 + 5.00000000E-01*_TMP5);
    _x0043 = _x0041/vec2( 2.00000003E-01, 2.00000003E-01);
    _TMP12 = min(vec2( 1.00000000E+00, 1.00000000E+00), _x0043);
    _TMP44 = max(vec2( 0.00000000E+00, 0.00000000E+00), _TMP12);
    _pa = _TMP44*_TMP44*(vec2( 3.00000000E+00, 3.00000000E+00) - 2.00000000E+00*_TMP44);
    _TMP17 = _co*_pa.x*_pa.y;
    _colorgrid = vec4(_TMP17.x, _TMP17.y, _TMP17.z, 1.00000000E+00);
    _frame = COMPAT_TEXTURE(Texture, TEX0.xy);
    _TMP6 = COMPAT_TEXTURE(bg, TEX1.xy);
    _background = vec4(_TMP6.x, _TMP6.y, _TMP6.z, _TMP6.w);
    _ret_0 = _frame + _background.w*(_colorgrid - _frame);
    FragColor = _ret_0;
    return;
} 
#endif
