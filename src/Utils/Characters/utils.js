export const getStatusBadgeStyle = (status)=>{
    let statusBadge="";
    switch(status.toLowerCase()){
      case("alive"):
        statusBadge="success";
        break;
        case("dead"):
        statusBadge="danger";
        break;
        case("unknown"):
        default:
        statusBadge="dark";
        break;
    }
    return statusBadge;
}