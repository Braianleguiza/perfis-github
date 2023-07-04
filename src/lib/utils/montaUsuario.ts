import type IUsuario from '../interfaces/IUsuario';
export default function montaUsuario(dadosUsuario: any): IUsuario {
    return {
        avatar_url: dadosUsuario.avatar_url,
        login: dadosUsuario.login,
        nome: dadosUsuario.name,
        perfil_url: dadosUsuario.html_url,
        repositorios_publicos: dadosUsuario.public_repos,
        seguidores: dadosUsuario.followers,
    };
}