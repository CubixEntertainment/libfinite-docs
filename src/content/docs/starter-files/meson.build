project(
    'myApp',
    'c',
    version: '0.1.1',
    meson_version: '>=1.0'
)

cc = meson.get_compiler('c')

wayland_client = dependency('wayland-client')
wayland_protos = dependency('wayland-protocols', version: '>=1.24', default_options: ['tests=false'])
cairo = dependency('cairo')
vulkan = dependency('vulkan')
sndfile = dependency('sndfile')
alsa = dependency('alsa')
finite = dependency('finite', version: ['>=0.7.0']) # libfinite

xdg_shell = custom_target('xdg-shell',
    input: 'xdg-shell.xml',
    output: ['xdg-shell-client-protocol.h', 'xdg-shell-protocol.c'],
    command: [
      'wayland-scanner', 'client-header', '@INPUT@', '@OUTPUT0@',
      '&&',
      'wayland-scanner', 'private-code', '@INPUT@', '@OUTPUT1@'
    ]
)

layer_shell = custom_target('layer-shell',
    input: 'layer-shell.xml',
    output: ['layer-shell-client-protocol.h', 'layer-shell-protocol.c'],
    command: [
      'wayland-scanner', 'client-header', '@INPUT@', '@OUTPUT0@',
      '&&',
      'wayland-scanner', 'private-code', '@INPUT@', '@OUTPUT1@'
    ]
)

src = [
    'src/main.c',
    xdg_shell[1],
    layer_shell[1]
]

deps = [
    wayland_client,
    wayland_protos,
    cairo,
    finite,
    sndfile,
    alsa,
    vulkan
]


executable(
    'myApp', 
    sources: src,
    dependencies: deps
)