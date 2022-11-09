import { Request, Response } from "express";
import { where } from "sequelize";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json({
            msg: 'get - usuarios',
            usuarios
        })

    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con id ${id}`
            })
        }
        res.json({
            msg: 'get - usuario',
            usuario
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req;
    const { nombre, email } = req.body;

    try {

        if (!nombre) return res.json({ msg: 'El nombre es obligatorio' });
        if (!email) return res.json({ msg: 'El email es obligatorio' });

        const emailExist = await Usuario.findOne({ where: { email: email } });

        if (emailExist) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${email}`
            })
        }

        const usuario = await Usuario.create(body);

        await usuario.save();

        res.json({
            msg: 'post - usuarios',
            body
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con id ${id}`
            })
        }

        await usuario.update(body);

        res.json({
            msg: 'put - usuarios',
            usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con id ${id}`
            })
        }

        await usuario.update({estado: false});
        // await usuario.destroy();
        
        res.json({
            msg: 'delete - usuarios',
            id
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}