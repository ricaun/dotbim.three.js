const dotbim_cubes = {
    schema_version: "1.0.0",
    meshes: [
        {
            mesh_id: 0,
            coordinates: [
                -1,
                -1,
                -1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1
            ],
            indices: [
                0,
                1,
                2,
                0,
                2,
                3,
                0,
                1,
                4,
                1,
                4,
                5,
                0,
                4,
                3,
                4,
                3,
                7,
                1,
                2,
                5,
                2,
                5,
                6,
                2,
                3,
                7,
                2,
                6,
                7,
                4,
                5,
                7,
                5,
                6,
                7
            ],
            colors: [
                0, 0, 255, 255,
                0, 0, 255, 255,
                200, 0, 0, 255,
                200, 0, 0, 255,
                200, 200, 200, 255,
                200, 200, 200, 255,
                0, 255, 255, 255,
                0, 255, 255, 255,
                255, 0, 255, 255,
                255, 0, 255, 255,
                0, 255, 0, 255,
                0, 255, 0, 255,
            ]
        },
        {
            mesh_id: 1,
            coordinates: [
                -1,
                -1,
                -1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1
            ],
            indices: [
                0,
                1,
                2,
                0,
                2,
                3,
                0,
                1,
                4,
                1,
                4,
                5,
                0,
                4,
                3,
                4,
                3,
                7,
                1,
                2,
                5,
                2,
                5,
                6,
                2,
                3,
                7,
                2,
                6,
                7,
                4,
                5,
                7,
                5,
                6,
                7
            ],
            colors: [
                200, 0, 0, 255,
                200, 0, 0, 255,
                0, 200, 0, 255,
                0, 200, 0, 255,
                0, 0, 200, 255,
                0, 0, 200, 255,
                100, 100, 0, 255,
                100, 100, 0, 255,
                100, 0, 100, 255,
                100, 0, 100, 255,
                0, 100, 100, 255,
                0, 100, 100, 255,
            ]
        }
    ],
    elements: [
        {
            mesh_id: 0,
            vector: {
                x: 3,
                y: 5,
                z: 0
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            color: {
                r: 255,
                g: 255,
                b: 255,
                a: 255
            },
            face_colors: [
                200, 0, 0, 255,
                200, 0, 0, 255,
                0, 200, 0, 255,
                0, 200, 0, 255,
                0, 0, 200, 255,
                0, 0, 200, 255,
                100, 100, 0, 255,
                100, 100, 0, 255,
                100, 0, 100, 255,
                100, 0, 100, 255,
                0, 100, 100, 255,
                0, 100, 100, 255]
        },
        {
            mesh_id: 0,
            vector: {
                x: 0,
                y: 5,
                z: 0
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            color: {
                r: 255,
                g: 100,
                b: 100,
                a: 255
            }
        },
        {
            mesh_id: 0,
            vector: {
                x: 0,
                y: 5,
                z: 3
            },
        },
        {
            mesh_id: 1,
            vector: {
                x: 3,
                y: 5,
                z: 3
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
        }
    ]
}

const dotbim_faces = {
    schema_version: "1.0.0",
    meshes: [
        {
            mesh_id: 0,
            coordinates: [
                0,
                0,
                0,
                1,
                0,
                0,
                1,
                1,
                0,
                0,
                1,
                0
            ],
            indices: [
                0,
                1,
                2,
                0,
                2,
                3
            ]
        },
        {
            mesh_id: 1,
            coordinates: [
                0,
                0,
                0,
                1,
                0,
                0,
                1,
                1,
                0,
                0,
                1,
                0
            ],
            indices: [
                0,
                1,
                2,
                0,
                2,
                3
            ],
            colors: [
                150,
                0,
                150,
                255
            ]
        },
        {
            mesh_id: 2,
            coordinates: [
                0,
                0,
                0,
                1,
                0,
                0,
                1,
                1,
                0,
                0,
                1,
                0
            ],
            indices: [
                0,
                1,
                2,
                0,
                2,
                3
            ],
            colors: [
                0,
                0,
                150,
                255,
                0,
                100,
                200,
                255
            ]
        },
        {
            mesh_id: 3,
            coordinates: [
                0,
                0,
                0,
                1,
                0,
                0,
                1,
                1,
                0,
                0,
                1,
                0
            ],
            indices: [
                0,
                1,
                2,
                0,
                2,
                3
            ],
            colors: [
                150,
                0,
                0,
                255,
                200,
                0,
                0,
                255,
                250,
                0,
                0,
                255,
                0,
                150,
                0,
                255,
                0,
                200,
                0,
                255,
                0,
                250,
                0,
                255
            ]
        }
    ],
    elements: [
        {
            mesh_id: 0,
            vector: {
                x: 0,
                y: 0,
                z: 0
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            }
        },
        {
            mesh_id: 1,
            vector: {
                x: 1,
                y: 0,
                z: 0
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            }
        },
        {
            mesh_id: 2,
            vector: {
                x: 2,
                y: 0,
                z: 0
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            }
        },
        {
            mesh_id: 3,
            vector: {
                x: 3,
                y: 0,
                z: 0
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            }
        },
        {
            mesh_id: 0,
            vector: {
                x: 0,
                y: 0,
                z: 1
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            color: {
                r: 50,
                g: 255,
                b: 50,
                a: 255
            }
        },
        {
            mesh_id: 1,
            vector: {
                x: 1,
                y: 0,
                z: 1
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            color: {
                r: 100,
                g: 255,
                b: 100,
                a: 255
            }
        },
        {
            mesh_id: 2,
            vector: {
                x: 2,
                y: 0,
                z: 1
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            color: {
                r: 150,
                g: 255,
                b: 150,
                a: 255
            }
        },
        {
            mesh_id: 3,
            vector: {
                x: 3,
                y: 0,
                z: 1
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            color: {
                r: 200,
                g: 255,
                b: 200,
                a: 200
            }
        },
        {
            mesh_id: 0,
            vector: {
                x: 0,
                y: 0,
                z: 2
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            face_colors: [255, 50, 50, 255, 50, 50, 50, 50]
        },
        {
            mesh_id: 1,
            vector: {
                x: 1,
                y: 0,
                z: 2
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            face_colors: [255, 100, 100, 255, 100, 100, 100, 50]
        },
        {
            mesh_id: 2,
            vector: {
                x: 2,
                y: 0,
                z: 2
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            face_colors: [255, 150, 150, 255, 150, 150, 150, 50]
        },
        {
            mesh_id: 3,
            vector: {
                x: 3,
                y: 0,
                z: 2
            },
            rotation: {
                qx: 0,
                qy: 0,
                qz: 0,
                qw: 1
            },
            face_colors: [255, 200, 200, 200, 200, 200, 200, 50]
        },
    ]
}
